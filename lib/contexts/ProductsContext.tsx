import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction
} from 'react';

import type {
  Product,
  ProductInventory,
  ProductPack,
  ProductDiscount,
  ListProductReviews,
} from '@core/types/products';
import type { CartItem, GuestCartCheckItem } from '@core/types/cart';
import { 
  convertToProduct,
  getProductImgUrl as getProductImgUrlMW, 
  getAllProductImgsUrl as getAllProductImgsUrlMW,
  convertToProductPack,
} from '@core/utils/products';

import { pages } from '@lib/constants/navigation';
import { productIds, packIds } from '@lib/constants/products';
import { everfreshImgIds, bagsImgIds, placeholderImgId, everfreshPackImgIds, bagsPackImgIds } from '@lib/constants/multimedia';

type ProductsContext = {
  everfreshProduct: Product,
  bagsProduct: Product,
  initProducts: (newProducts: Product[], newPacks: ProductPack[]) => void,
  isEverfreshProduct: (item: Product | ProductPack | CartItem | GuestCartCheckItem) => boolean,
  isBagsProduct: (item: Product | ProductPack | CartItem | GuestCartCheckItem) => boolean,
  getProductPageUrl: (item: Product | CartItem | GuestCartCheckItem) => string,
  getProductImgUrl: (item: Product | CartItem | GuestCartCheckItem, index?: number) => string,
  getCartItemImgUrl: (item: CartItem | GuestCartCheckItem) => string,
  getProductDetailImgsUrl: (item: Product | CartItem | GuestCartCheckItem) => string[],
  getProductPacks: (product: Product) => ProductPack[],
  getProductInventory: (id: number) => ProductInventory | undefined,
  getProductPack: (id: number) => ProductPack | undefined,
  productVariants: (ProductInventory | ProductPack)[],
  listProductReviews: ListProductReviews,
  setListProductReviews: Dispatch<SetStateAction<ListProductReviews>>,
};

const ProductsContext = createContext<ProductsContext>({
  everfreshProduct: {} as Product,
  bagsProduct: {} as Product,
  initProducts: () => {},
  isEverfreshProduct: () => false,
  isBagsProduct: () => false,
  getProductPageUrl: () => '',
  getProductImgUrl: () => '',
  getCartItemImgUrl: () => '',
  getProductDetailImgsUrl: () => [],
  getProductPacks: () => [],
  getProductInventory: () => undefined,
  getProductPack: () => undefined,
  productVariants: [],
  listProductReviews: {} as ListProductReviews,
  setListProductReviews: () => {},
});

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('Error while reading ProductsContext');
  }
  return context;
};

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [everfreshProduct, setEverfreshProduct] = useState<Product>({
    id: 1,
    categoryId: 1,
    name: {
      en: 'EverFresh Vacuum Machine',
      es: 'Envasadora EverFresh',
      current: 'Envasadora EverFresh',
    },
    description: {
      en: 'EverFresh Vacuum Machine',
      es: 'Envasadora EverFresh',
      current: 'Envasadora EverFresh',
    },
    lowestPrice: 22.65,
    lowestRealPrice: 22.65,
    imageNames: [],
    inventories: [
      {
        id: 1,
        productId: 1,
        sku: '',
        name: {
          en: 'EverFresh Vacuum Machine',
          es: 'Envasadora EverFresh',
          current: 'Envasadora EverFresh',
        },
        description: {
          en: 'EverFresh Vacuum Machine',
          es: 'Envasadora EverFresh',
          current: 'Envasadora EverFresh',
        },
        price: 22.65,
        quantity: 1,
        realPrice: 22.65,
        bigbuy: {
          id: '',
          name: '',
          description: '',
          price: 0,
          quantity: 1,
        },
        product: {} as Product,
        rating: '0',
        reviewsCount: 0,
      },
    ],
    discounts: undefined,
    activeDiscount: undefined,
  });
  const [bagsProduct, setBagsProduct] = useState<Product>({
    id: 3,
    categoryId: 2,
    name: {
      en: 'Box of 10 vacuum bags with valve',
      es: 'Paquete de 10 bolsas de vacío con válvula',
      current: 'Paquete de 10 bolsas de vacío con válvula',
    },
    description: {
      en: 'Box of 10 vacuum bags with valve',
      es: 'Paquete de 10 bolsas de vacío con válvula',
      current: 'Paquete de 10 bolsas de vacío con válvula',
    },
    lowestPrice: 14.59,
    lowestRealPrice: 14.59,
    imageNames: [],
    inventories: [
      {
        id: 6,
        productId: 3,
        sku: '',
        name: {
          en: 'XS (22cm x 21cm)',
          es: 'XS (22cm x 21cm)',
          current: 'XS (22cm x 21cm)',
        },
        description: {
          en: 'Box of 10 vacuum bags with valve (22cm x 21cm)',
          es: 'Paquete de 10 bolsas de vacío con válvula (22cm x 21cm)',
          current: 'Paquete de 10 bolsas de vacío con válvula (22cm x 21cm)',
        },
        price: 14.59,
        quantity: 1,
        realPrice: 14.59,
        bigbuy: {
          id: '',
          name: '',
          description: '',
          price: 0,
          quantity: 1,
        },
        product: {} as Product,
        rating: '0',
        reviewsCount: 0,
      },
    ],
    discounts: undefined,
    activeDiscount: undefined,
  });
  const [everfreshPacks, setEverfreshPacks] = useState<ProductPack[]>([]);
  const [bagsPacks, setBagsPacks] = useState<ProductPack[]>([]);
  const [productVariants, setProductVariants] = useState<(ProductInventory | ProductPack)[]>([]);
  const [listProductReviews, setListProductReviews] = useState<ListProductReviews>({
    reviews: [],
    totalPages: 1,
    currentPage: 0,
  });

  const isEverfreshProduct = useCallback((item: Product | ProductPack | CartItem | GuestCartCheckItem) => {
    const product = convertToProduct(item);
    if (product?.id === productIds.everfresh) {
      return true;
    }
    return false;
  }, []);

  const isBagsProduct = useCallback((item: Product | ProductPack | CartItem | GuestCartCheckItem) => {
    const product = convertToProduct(item);
    if (product?.id === productIds.bags) {
      return true;
    }
    return false;
  }, []);

  const isEverfreshPack = useCallback((item: ProductPack | CartItem | GuestCartCheckItem) => {
    const productPack = convertToProductPack(item);
    if (productPack?.id === packIds.everfresh) {
      return true;
    }
    return false;
  }, []);

  const isBagsPack = useCallback((item: ProductPack | CartItem | GuestCartCheckItem) => {
    const productPack = convertToProductPack(item);
    if (
      productPack?.id === packIds.bagsXS ||
      productPack?.id === packIds.bagsS ||
      productPack?.id === packIds.bagsM ||
      productPack?.id === packIds.bagsL ||
      productPack?.id === packIds.bagsXL ||
      productPack?.id === packIds.bagsMIX
    ) {
      return true;
    }
    return false;
  }, []);

  const initProducts = useCallback((products: Product[], packs: ProductPack[]) => {
    products.forEach((item) => {
      if (isEverfreshProduct(item)) {
        setEverfreshProduct(item);
      } else if (isBagsProduct(item)) {
        setBagsProduct(item);
      }
    });
    packs.forEach((item) => {
      if (isEverfreshProduct(item)) {
        setEverfreshPacks(current => [...current, item]);
      }
      if (isBagsProduct(item)) {
        setBagsPacks(current => [...current, item]);
      }
    });
  }, [isBagsProduct, isEverfreshProduct]);

  const getProductPageUrl = useCallback((item: Product | CartItem | GuestCartCheckItem) => {
    const product = convertToProduct(item);
    if (product) {
      if (isEverfreshProduct(product)) {
        return `${pages.everfresh.path}`;
      } else if (isBagsProduct(product)) {
        return `${pages.bags.path}`;
      }
      return `${pages.productDetail.path}/${product.name.current}?id=${product.id}`;
    }
    return pages.productList.path;
  }, [isBagsProduct, isEverfreshProduct]);
  
  const getProductImgUrl = useCallback((item: Product | CartItem | GuestCartCheckItem, index = 0) => {
    const product = convertToProduct(item);
    if (product) {
      if (isEverfreshProduct(product)) {
        return everfreshImgIds[0];
      } else if (isBagsProduct(product)) {
        return bagsImgIds[0];
      }
      return getProductImgUrlMW(product, index) || placeholderImgId;
    }
    return placeholderImgId;
  }, [isBagsProduct, isEverfreshProduct]);

  const getProductPackImgUrl = useCallback((item: ProductPack | CartItem | GuestCartCheckItem) => {
    const productPack = convertToProductPack(item);
    if (productPack) {
      if (isEverfreshPack(item)) {
        return everfreshPackImgIds[0];
      } else if (isBagsPack(item)) {
        return bagsPackImgIds[0];
      }
    }
    return placeholderImgId;
  }, [isBagsPack, isEverfreshPack]);

  const getCartItemImgUrl = useCallback((item: CartItem | GuestCartCheckItem) => {
    if (item.pack) {
      return getProductPackImgUrl(item.pack);
    } else if (item.inventory) {
      return getProductImgUrl(item);
    }
    return placeholderImgId;
  }, [getProductImgUrl, getProductPackImgUrl]);
  
  const getProductDetailImgsUrl = useCallback((item: Product | CartItem | GuestCartCheckItem) => {
    const product = convertToProduct(item);
    if (product) {
      if (isEverfreshProduct(product)) {
        return everfreshImgIds;
      } else if (isBagsProduct(product)) {
        return bagsImgIds;
      }
      const imgsUrl = getAllProductImgsUrlMW(product);
      return imgsUrl.length >= 1 ? imgsUrl : [placeholderImgId]
    }
    return [placeholderImgId];
  }, [isBagsProduct, isEverfreshProduct]);

  const getProductPacks = useCallback((product?: Product) => {
    if (product) {
      if (isEverfreshProduct(product)) {
        return everfreshPacks;
      } else if (isBagsProduct(product)) {
        return bagsPacks;
      }
      return [];
    }
    return everfreshPacks.concat(bagsPacks);
  }, [bagsPacks, everfreshPacks, isBagsProduct, isEverfreshProduct]);

  const getProductInventory = useCallback((id: number) => {
    const everfreshInventories = everfreshProduct?.inventories || [];
    const bagsInventories = bagsProduct?.inventories || [];
    const inventories = everfreshInventories.concat(bagsInventories);
    return inventories.find(item => item.id === id);
  }, [bagsProduct?.inventories, everfreshProduct?.inventories]);

  const getProductPack = useCallback((id: number) => {
    const packs = getProductPacks();
    return packs.find(item => item.id === id);
  }, [getProductPacks]);

  useEffect(() => {
    const everfreshInventories = everfreshProduct?.inventories || [];
    const bagsInventories = bagsProduct?.inventories || [];
    const inventories = everfreshInventories.concat(bagsInventories);
    const packs = getProductPacks();
    let variants: (ProductInventory | ProductPack)[] = [];
    variants = variants.concat(inventories, packs);
    setProductVariants(variants);
  }, [bagsProduct?.inventories, everfreshProduct?.inventories, getProductPacks]);

  return (
    <ProductsContext.Provider
      value={{
        everfreshProduct,
        bagsProduct,
        initProducts,
        isEverfreshProduct,
        isBagsProduct,
        getProductPageUrl,
        getProductImgUrl,
        getCartItemImgUrl,
        getProductDetailImgsUrl,
        getProductPacks,
        getProductInventory,
        getProductPack,
        productVariants,
        listProductReviews,
        setListProductReviews,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
