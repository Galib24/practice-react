import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first =  100;
    const second = 100;
    const total = multiply(first, second)
    return (
        <div>
            <h1>This is SHoes components</h1>
            <p>Total Shoes: {total}</p>
        </div>
    );
};

export default Shoes;