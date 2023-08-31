import React, { useEffect, useState } from 'react'
import { BtnContainerStyled, ProductosContainer} from './ProductsStyles'


import CardProduct from './CardProduct'
import Btn from '../UI/button/Btn'
import { useSelector } from 'react-redux'
import { INITIAL_LIMIT } from '../../utils/constants'

const CardsProducts = () => {
    const [limit, setLimit] = useState(INITIAL_LIMIT);

    let products = useSelector(state => state.products.products) || [];
    // console.log({products})
    const selectedCategory = useSelector(state => state.categories.selectedCategory);
    const totalProducts = useSelector(state => state.products.totalProducts);

    if (selectedCategory) {
        products = {
        [selectedCategory]: products[selectedCategory],
        };
    }

    useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);
    /* console.log('products:', products);
    console.log('selectedCategory:', selectedCategory); */

  return (
    <>
    <ProductosContainer>
    {Object.entries(products).map(([_key, items]) =>
          items.map(product => {
            if (limit >= product.id || selectedCategory) {
              return <CardProduct key={product.id} {...product} />;
            } else return null;
          })
        )}
        </ProductosContainer>

        {!selectedCategory && (
        <BtnContainerStyled>
          <Btn
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary="true"
            disabled={limit === INITIAL_LIMIT}
          >
            <span>Ver menos</span>
          </Btn>
          
          <Btn
            onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
          >
            Ver más
          </Btn>
        </BtnContainerStyled>
      )}
    </>
        
  )
}

export default CardsProducts