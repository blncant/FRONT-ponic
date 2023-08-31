import { useSelector } from 'react-redux';

import { OrdersContainerStyled } from './CardMyOrdersStyles';
import Loader from '../UI/loader/Loader';
import CardMyOrders from './CardMyOrders';

const CardsMyOrders = () => {
  const { orders, loading, error } = useSelector(state => state.orders)

  if (loading && !orders) {
    return <Loader styles={{ height: '50px', width: '50px'}} />
  }

  if (error) {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>
  }
  return (
    <OrdersContainerStyled>
      {
        orders?.length ? (
          orders.map(order => <CardMyOrders key={order._id} {...order} />)
        ): (
          <h2>Aun no tenes pedidos!</h2>
        )
      }
    </OrdersContainerStyled>
  );
};

export default CardsMyOrders;