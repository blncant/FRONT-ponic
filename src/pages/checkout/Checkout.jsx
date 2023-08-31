import React from 'react';

import CheckoutForm from '../../components/checkout/form/CheckoutForm';
import ProductsCheckout from '../../components/checkout/prod-checkout/ProductsCheckout';
import { ContainerCheckoutStyled } from '../checkout/CheckoutStyles';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={totalPrice}
        />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={totalPrice}
        />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
