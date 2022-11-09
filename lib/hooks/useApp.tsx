import { useRef, useEffect } from 'react';

import type { User } from '@core/types/user';
import type { ProductCategory } from '@core/types/products';
import type { Cart } from '@core/types/cart';
import { getLoggedUser } from '@core/utils/auth';
import { getAllProductCategories } from '@core/utils/products';
import { useAppContext } from '@lib/contexts/AppContext';
import { useSearchContext } from '@lib/contexts/SearchContext';
import { useAuthContext } from '@lib/contexts/AuthContext';
import { useCartContext } from '@lib/contexts/CartContext';

const useApp = (fromLinkLayout: boolean) => {
  const { setInitialized } = useAppContext();
  const { setProductCategories } = useSearchContext();
  const { setToken, setBraintreeToken, setUser } = useAuthContext();
  const { initCart } = useCartContext();

  const firstRenderRef = useRef(false);

  useEffect(() => {
    if (!firstRenderRef.current) {
      firstRenderRef.current = true;
      
      const initData = async () => {
        await getLoggedUser().then(async (response: {token: string, user: User, braintreeToken: string, cart: Cart}) => {
          setToken(response.token);
          setUser(response.user);
          setBraintreeToken(response.braintreeToken);
          initCart(response.cart);
        }).catch((error: Error) => {
        }); 

        await getAllProductCategories().then((response: {productCategories: ProductCategory[]}) => {
          setProductCategories(response.productCategories);
          setInitialized(true);
        }).catch((error: Error) => {
          throw error;
        });
      };  

      if (!fromLinkLayout) {
        initData();
      } else {
        setInitialized(true);
      }
    }    
  }, [fromLinkLayout, initCart, setBraintreeToken, setInitialized, setProductCategories, setToken, setUser]);

  return {};
}

export default useApp;
