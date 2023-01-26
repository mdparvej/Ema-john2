import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Product from '../prouduct/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart,setCart] = useState([]);
    const handelAddProduct = (product) => {
        console.log('Added product',product);
        const newCart = [...cart,product];
        console.log(newCart);
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product handelAddProduct={handelAddProduct} pro={product}></Product>)
                }
            </div>
            <div>
                <h3>this is card</h3>
                <h5>Order Summary: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;