import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Store } from './store/index';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ADDDATA } from './actions/index';

const ComponentA = () => {
    const [count, setCount] = useState(0);
    const { globalState, setGlobalState } = useContext(Store);
    const [state, dispatch] = useReducer();

    useEffect(() => {
        console.log('useEffectが呼び出されました。');

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res.data, 'res check')
                setGlobalState({
                    type: ADDDATA,
                    data: res.data
                });
            }
            )
    }, [dispatch]);

    const onIncrement = () => {
        setCount(count + 1);
    }
    const onDecrement = () => {
        setCount(count - 1);
    }

    console.log(globalState);
    console.log(state);

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