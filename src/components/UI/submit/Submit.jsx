import React from 'react';
import { ButtonSubmitStyled } from './SubmitStyles';

const Submit = ({ children, onClick, disabled = false }) => {
  return (
    <ButtonSubmitStyled
      disabled={disabled}
      onClick={onClick}
      type='submit'
    >
      {children}
    </ButtonSubmitStyled>
  );
};

export default Submit;