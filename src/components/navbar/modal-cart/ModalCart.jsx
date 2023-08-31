import React from 'react';
import { useNavigate } from 'react-router-dom';



import {FaWindowClose} from 'react-icons/fa'

import Submit from '../../UI/submit/Submit';
import ModalCartCard from './ModalCartCard';

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from './ModalCartStyles';

import { ModalOverlayStyled } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../../redux/cart/cartSlice';

import { formatPrice } from '../../../utils/formatPrice';

const ModalCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    cartItems,
    shippingCost,
    hidden: hiddenCart,
  } = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          ishidden={hiddenCart}
        />
      )}
      
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
          >
          
              <CloseButtonStyled
                className='close__modal '
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <FaWindowClose size='30px' />
              </CloseButtonStyled>
            

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
        
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map(item => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <p>No hay productos todavía</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>
                  {formatPrice(totalPrice + shippingCost)}
                </PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit onClick={() => navigate('/checkout')}>
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      
    </>
  );
};

export default ModalCart;
