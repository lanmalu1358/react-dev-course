import React, { useContext } from 'react';
import { Store } from './store/index';
import { INCREMENT, DECREMENT, RESET } from './actions/index';

const ComponentE = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const handleClick = () => {
        setGlobalState({
            type: INCREMENT
        });
    }
    const Handleclick = () => {
        setGlobalState({
            type: DECREMENT
        });
    }
    const HandleClick = () => {
        setGlobalState({
            type: RESET
        });
    }

    console.log(globalState);

    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={Handleclick}>-1</button>
            <button onClick={HandleClick}>reset</button>
        </div>
    );
};

export default ComponentE;