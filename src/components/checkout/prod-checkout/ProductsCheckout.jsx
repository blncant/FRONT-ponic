import React from 'react';

import { formatPrice } from '../../../utils/formatPrice';

import CardProductCheckout from '../../checkout-card/CardProductCheckout';

import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  SubtotalStyled,
  EnvioStyled,
  HrStyled,
  TotalStyled,
  PriceTotalStyled,
} from './ProductsCheckoutStyles';

const ProductsCheckout = ({ cartItems, shippingCost, price }) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>
      <CardsWrapperStyled>
        { 
          cartItems.length ? (
            cartItems.map(item => <CardProductCheckout key={item.id} {...item} />)
          ) : (
            <p>Compra algo</p>
          )
        }
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(price)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(price + shippingCost)}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;
