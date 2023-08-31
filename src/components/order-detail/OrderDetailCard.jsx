import React from 'react';
import { formatPrice } from '../../utils';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './OrderDetailCardStyles';

const OrderDetailCard = ({ imgCard, title, quantity, price}) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src={imgCard}
          alt={title}
        />
        <div>
          <h3>{title}</h3>
          
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}U</p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default OrderDetailCard;