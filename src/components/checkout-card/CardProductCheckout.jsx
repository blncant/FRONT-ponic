import { formatPrice } from '../../utils/formatPrice';

import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

import Count from '../UI/count/Count';
import Increase from '../UI/increase/Increase';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  QuantityContainerStyled,
} from './CardProductCheckoutStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../../redux/cart/cartSlice';
import { IoMdTrash } from 'react-icons/io';

const CardProductCheckout = ({ img, title, price, quantity, id }) => {
  const dispatch = useDispatch()
  return (
    <CardContainerStyled>
      <img
        src={img}
        alt={title}
      />
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={() => dispatch(removeToCart(id))}
        >
         {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={() => dispatch(addToCart({ img, title, price, quantity, id }))}>
          <FaPlus />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
