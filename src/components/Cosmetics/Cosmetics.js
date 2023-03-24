import React from 'react';
import { add, multiply } from '../../utilities/calculate';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second)
    const total2 =multiply(first,second)
    return (
        <div>
            <h1>Welcome to cosmetic project</h1>
            <p>Total: {total}</p>
            <p>Total2: {total2}</p>
        </div>
    );
};

export default Cosmetics;