import React from 'react';

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModalUserStyles';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, toggleHiddenMenu } from '../../../redux/user/userSlice';

const ModalUser = () => {
  const { currentUser, hiddenMenu} = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key='cart-user'
        >
          <UsernameStyled>{`Hola ${currentUser?.nombre}`}</UsernameStyled>
          <HrStyled />
          <LinkStyled to='/orders-history'>Mis pedidos</LinkStyled>
          <span onClick={() => {
            dispatch(setCurrentUser(null));
            dispatch(toggleHiddenMenu())
          }}>Sign Out</span>
        </ModalContainerStyled>
      )}
    </>
  );
};

export default ModalUser;
