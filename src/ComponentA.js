import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ComponentA = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffectが呼び出されました。');

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res, 'res check')
            }
            )
    }, []);

    const onIncrement = () => {
        setCount(count + 1);
    }
    const onDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <div>ComponentA</div>
            <Link to="Componentb">ComponentBへ移動</Link>

            <div>count : {count}</div>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>


    );
};

export default ComponentA;