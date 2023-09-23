import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils';
// import OrderStatus from '../UI/order-status/OrderStatus';

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardMyOrdersStyles';

const CardMyOrders = ({ createdAt, status, total, _id }) => {
  const navigate = useNavigate()

  return (
    <PedidoContainerStyled onClick={() => navigate(`/order-detail/${_id}`)}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: #{_id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha {createdAt.slice(0, 10)}</IdStyled>
        <PriceStyled>{formatPrice(total)}</PriceStyled>
      </TextContainerStyled>
      {/* <OrderStatus status={status} /> */}
    </PedidoContainerStyled>
  );
};

export default CardMyOrders;