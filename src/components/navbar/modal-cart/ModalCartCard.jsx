import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';

import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../../../redux/cart/cartSlice';

import { IoMdTrash } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

import Increase from '../../UI/increase/Increase';
import Count from '../../UI/count/Count';

const ModalCartCard = ({ img, title, price, quantity, id }) => {
  const dispatch = useDispatch()

  return (
    <ProductContainerStyled>
      <img
        src={img}
        alt={title}
      />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase 
          onClick={() => dispatch(removeToCart(id))}>
        { quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>
        {quantity}
        </Count>
        
        <Increase onClick={() => dispatch(addToCart({ img, title, price, quantity, id }))}>
          <FaPlus />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
