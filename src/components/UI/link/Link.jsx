import React from 'react';
import { ContainerLinkStyled, StyledLink } from './LinkStyled';

const Link = ({ to = '/' }) => {
  return (
    <ContainerLinkStyled>
      <StyledLink to={to}>
        <span> Ir al Home </span>

      </StyledLink>
    </ContainerLinkStyled>
  );
};

export default Link;