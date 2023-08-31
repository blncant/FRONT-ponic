import React from 'react'
import { FooterContainerStyled, LinksStyled } from './FooterStyles'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainerStyled>
        <LinksStyled>
            <Link to="/">Preguntas Frecuentes</Link>
            <Link to="/">Politica de Privacidad</Link>
            <Link to="/">Terminos de Uso</Link>
        </LinksStyled>

        <p>
        <span>©2022 Ponic GreenLab.</span>Todos los derechos reservados.
        </p>
    </FooterContainerStyled>
  )
}

export default Footer