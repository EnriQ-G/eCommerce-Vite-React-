import React from 'react'
import './productcard.scss'

const ProductCard = ({ product }) => {
  return (
    <div className='product-card card' key={product.id}>
      <img className='product-card__image card-img-top' src={product.image} alt={product.title} />
      <div className='product-card__body card-body'>
        <h5 className='product-card__title card-title'>{product.title}</h5>
        <p className='product-card__description card-text'>{product.description}</p>
        <p className='product-card__price card-text'>${product.price}</p>
        <button className='product-card__button btn btn-primary'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
