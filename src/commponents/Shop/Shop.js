import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    console.log(first10[0]);
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h1>this is shop</h1>
                <h2>{products.length}</h2>
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div>
                <h3>this is card</h3>
            </div>
        </div>
    );
};

export default Shop;