import { PaymentMethodPayload } from 'braintree-web-drop-in';

import { UserAddress } from '@core/types/user';

export type CheckoutContact = {
  shipping: UserAddress,
  billing: UserAddress,
  sameAsShipping: boolean,
  checkoutEmail?: string,
  notes?: string,
};

export type CheckoutPayment = {
  braintreePayload?: PaymentMethodPayload,
  paypalPayload?: {
    orderId: string,
    card?: {
      lastFour?: string,
      type?: string,
      holderName?: string,
    },
    paypal?: {
      email: string,
    }
  },
  remember?: boolean,
};

export type CheckoutData = CheckoutContact & CheckoutPayment;
