import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name,price,id} = props.bal
   const addToCart = (id) =>{
    console.log('item added',id);
   }
   const addToCartWithParameter = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this: {props.bal.name}</h2>
            <h3>Only for: ${props.bal.price}</h3>
            <p><small>ID: {id}</small></p>
             <button onClick={addToCartWithParameter}>Add to Cart</button>
             <button onClick={() => addToCart(id)}>Add to Cart: short cut</button>
        </div>
    );
};

export default Cosmetic;