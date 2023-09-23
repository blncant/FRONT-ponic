import React from 'react'

import { ProductCard, CardTop, CardContent } from './ProductsStyles'
import {FaShoppingBag} from 'react-icons/fa'

import { formatPrice } from '../../utils/formatPrice'

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardProduct = ({title, category, price, cardImg, id, img, desc }) => {
    const dispatch = useDispatch()
    
    return (
        <ProductCard>
            <CardTop>
            <button
                onClick={() => 
                dispatch(addToCart({ cardImg, img, title, price, id, desc }))
                }
            >
                <FaShoppingBag/>
            </button>
            <img src={cardImg} alt={title} />
            </CardTop>
            <CardContent>
            <p>{formatPrice(price)}</p>
            <h4>{category}</h4>
            <h3>{title}</h3>
            
            </CardContent>
        </ProductCard>
    )
}

export default CardProduct

