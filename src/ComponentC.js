import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import reducer from './reducers/index';
import ComponentD from './ComponentD'

const initialCount = {
    count: 0,
    data: []
};

const ComponentC = () => {
    const [state, dispatch] = useReducer(reducer, initialCount);

    const increment = () => {
        console.log('increment');
        dispatch({
            type: 'INCREMENT'
        });
    };
    const decrement = () => {
        console.log('decrement');
        dispatch({
            type: 'DECREMENT'
        });
    };
    const reset = () => {
        console.log('reset');
        dispatch({
            type: 'RESET'
        });
    };



    return (
        <div>
            <div>ComponentC</div>
            <Link to="/">ComponentAへ移動</Link>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            {/* <h1>{state.count}</h1> */}
            {state.count}
            <ComponentD />
        </div>


    );
};

export default ComponentC;