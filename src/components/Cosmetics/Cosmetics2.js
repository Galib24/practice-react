import React, { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';

const Cosmetics2 = () => {
    const [cosmetics, setCosmetics] = useState([]);
   useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))
   },[])
    return (
        <div>
            <h1>Welcome to cosmetics second</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    bal = {cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics2;