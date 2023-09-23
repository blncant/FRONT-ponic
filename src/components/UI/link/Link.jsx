import React from 'react';
import { ContainerLinkStyled, StyledLink } from './LinkStyled';

const Link = ({ to = '/' }) => {
  return (
    <ContainerLinkStyled whileTap={{ scale: 0.95 }}>
      <StyledLink to={to}>
        <span> Volver </span>

      </StyledLink>
    </ContainerLinkStyled>
  );
};

export default Link;