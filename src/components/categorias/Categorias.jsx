import React from 'react'
import { DiscoverCategorias } from './CategoriasStyles'

import {Categoria} from './Categoria'
import { useSelector } from 'react-redux'

const Categorias = () => {

    const categories = useSelector(state => state.categories.categories)

    return (
        <DiscoverCategorias>
            {categories.map(category => (
                <Categoria key={category.id} {...category}/>
            ))}
        </DiscoverCategorias>
  )
}

export default Categorias