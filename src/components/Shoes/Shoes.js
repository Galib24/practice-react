import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first =  100;
    const second = 100;
    const total = multiply(first, second)
    const sum = add(first,second);
    return (
        <div>
            <h1>This is SHoes components</h1>
            <p>Total Shoes: {total}</p>
            <p>sum of elements: {sum}</p>
        </div>
    );
};

export default Shoes;