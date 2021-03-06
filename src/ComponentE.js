import React, { useContext } from 'react';
import { Store } from './store/index';
import { INCREMENT, DECREMENT, RESET } from './actions/index';
import { Table } from 'react-bootstrap';

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


    console.log(globalState.data, "global state check");

    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={Handleclick}>-1</button>
            <button onClick={HandleClick}>reset</button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        globalState.data.map((element, index) => {
                            return (

                                <tr key={index}>
                                    <td>{element.userId}</td>
                                    <td>{element.id}</td>
                                    <td>{element.title}</td>
                                    <td>{element.completed.toString()}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ComponentE;