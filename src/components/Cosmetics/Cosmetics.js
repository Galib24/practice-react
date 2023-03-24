import React from 'react';
import { add, DevIded, multiply, subsTract } from '../../utilities/calculate';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    const first = 100;
    const second = 40;
    const total = add(first, second)
    const total2 =multiply(first,second)
    const subsTract1 = subsTract(first,second)
    const DevidedValue= DevIded(first,second)
    return (
        <div>
            <h1>Welcome to cosmetic project</h1>
            <p>Total: {total}</p>
            <p>multiply: {total2}</p>
            <p>SubsTract: {subsTract1}</p>
            <p>Devided Element: {parseInt(DevidedValue)}</p>
        </div>
    );
};

export default Cosmetics;