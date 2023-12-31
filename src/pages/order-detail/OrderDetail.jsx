import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../utils';

import OrderDetailCard from '../../components/order-detail/OrderDetailCard';
import Link from '../../components/UI/link/Link';

import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from './OrderDetailStyles';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders } from '../../axios/axiosOrders';

const OrderDetail= () => {
  const [visitedOrder, setVisitedOrder] = useState(null);
  const currentUser = useSelector(state => state.user.currentUser)
  const orders = useSelector(state => state.orders.orders)
  const dispatch = useDispatch()
  const { orderId } = useParams()

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser)
    }
    setVisitedOrder(orders?.find(order => order._id === orderId))
  }, [orderId, currentUser?.id, orders, dispatch]);

/*   useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    const foundOrder = orders?.find(order => order._id === orderId);
    console.log('Orden encontrada:', foundOrder);
    setVisitedOrder(foundOrder);
  }, [orderId, currentUser?.id, orders, dispatch]); */

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #{visitedOrder?._id.slice(0, 7)}</h1>
        <Link to='/orders-history'></Link>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        {
          visitedOrder?.items.map(item => (
            <OrderDetailCard key={item._id} {...item} />
          ))
        }
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(visitedOrder?.price)}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>{formatPrice(visitedOrder?.shippingCost)}</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>{formatPrice(visitedOrder?.total)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default OrderDetail;