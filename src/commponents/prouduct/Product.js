import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee,faShoppingCart} from "@fortawesome/free-solid-svg-icons"
const Product = (props) => {
    const {img, name,seller,price,stock} = props.pro;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
                <h3 className='product-name'>{name}</h3>
                <p>By:{seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock order soon </small></p>
                <button onClick={() => props.handelAddProduct(props.pro)} className='main-button'><FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>

            </div>
        </div>
    );
};

export default Product;