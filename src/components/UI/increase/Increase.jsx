import React from 'react';
import { IncreaseStyled } from './IncreaseStyles';

const Increase = ({
  children,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <IncreaseStyled
    whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IncreaseStyled>
  );
};

export default Increase;