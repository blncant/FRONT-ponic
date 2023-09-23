import React from 'react';
import { formatPrice } from '../../utils';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './OrderDetailCardStyles';

const OrderDetailCard = ({img, cardImg, title, quantity, price}) => {
    console.log('Ruta de la imagen:', img);

return (
    <ProductStyled>
      <ProductLeftStyled>
      
      <img src={img} alt={title} />
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