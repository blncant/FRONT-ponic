import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/button/Btn';
import CardsMyOrders from '../../components/my-orders/CardsMyOrders';

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesTitleStyled,
} from './OrdersHistoryStyles';

import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/axiosOrders';
import { clearError, fetchOrdersFail } from '../../redux/orders/ordersSlice';

const OrdersHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const { orders, error } = useSelector(state => state.orders);

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser?.token, orders, error]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis pedidos</MisOrdenesTitleStyled>
        <CardsMyOrders />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
    </>
  );
};

export default OrdersHistory;