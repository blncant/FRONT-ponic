import React from 'react'
import { CardCategoria } from './CategoriasStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice'

export const Categoria = ({title, category}) => {

    const selectedCategory = useSelector(state => state.categories.selectedCategory)
    const dispatch = useDispatch()


  return (
    <CardCategoria
        selected={category === selectedCategory}
        onClick={() => dispatch(selectCategory(category))}
        whileTap={{ scale: 0.95 }}
    >
        <h3>{title}</h3>
    </CardCategoria>
  )
}
