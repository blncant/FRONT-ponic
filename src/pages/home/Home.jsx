import React, { useRef } from 'react'
import Hero from "../../components/hero/Hero"
import Categorias from "../../components/categorias/Categorias"
import CardsProducts from "../../components/productos/CardsProducts"

import {
    CategoriasWrapper,
    HomeWrapper,
    ProductosWrapper,
  } from './HomeStyles';

function Home() {
    const productsRef = useRef();

    const doScroll = () => {
        window.scrollTo({
          top: productsRef.current.offsetTop,
          behavior: 'smooth',
        });
      };

  
  return (
    <HomeWrapper>
        <Hero productsRef={productsRef} doScroll={doScroll}  /> 

        <CategoriasWrapper ref={productsRef}>
        <h2 >Plant. Grow. Repeat. 🐞</h2>
        <p>Encontrá todo lo que necesitás para cultivar tus plantas en casa.</p>
            <Categorias/>
        </CategoriasWrapper>
        
        <ProductosWrapper >
            <CardsProducts/>
        </ProductosWrapper>
    
    </HomeWrapper>
  )
}

export default Home