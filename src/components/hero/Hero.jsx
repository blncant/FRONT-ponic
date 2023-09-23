import React from 'react'

import { 
    HeroBgStyled, 
    HeroBtnsStyled, 
    HeroContainerStyled 
} from './HeroStyles'

import Btn from '../UI/button/Btn'
import { Link } from 'react-router-dom'


const Hero = ({ doScroll, productsRef })=> {

    const handleClick = () => {
        if (productsRef && productsRef.current) {
          doScroll(productsRef.current.offsetTop);
        }
      };

  return (
    <HeroBgStyled>
        <HeroContainerStyled>
            <h3>PLANTEMOS ALGO JUNTOS 👩🏻‍🌾</h3>
            <h1>Tu camino para convertirte en un <span>Smart Gardener</span> </h1>
            <HeroBtnsStyled>
                <Link to="/register">
                    <Btn> Registrate </Btn>
                </Link>
                
                <Btn secondary="true" onClick={handleClick}>
                    Ver más
                </Btn>
            </HeroBtnsStyled>
        </HeroContainerStyled>
    </HeroBgStyled>
    
  )
}

export default Hero

