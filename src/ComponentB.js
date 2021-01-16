import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EVENT, DELETE_EVENT, ALLDELI_EVENT, DELETEID } from './actions/index';
import reducers from './reducers/index';
import { Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ComponentB = () => {
    const [state, dispatch] = useReducer(reducers, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [comment, setComment] = useState('');


    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_EVENT,
            title,
            body,
            comment
        });
        setTitle('');
        setBody('');
        setComment('');
    };

    const HandleClick = (e) => {
        e.preventDefault();
        dispatch({
            type: DELETE_EVENT,
            DELETEID
        });
    };

    const HANDLEclick = (e) => {
        e.preventDefault();
        dispatch({
            type: ALLDELI_EVENT,
            title,
            body,
            comment
        });
    };




    return (
        <div>
            <div>ComponentB</div>
            <Link to="Componentc">ComponentCへ移動</Link>


            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleClick}>
                    イベント作成
            </Button>
                <Button variant="danger" onClick={HANDLEclick}>
                    イベント全削除
            </Button>
            </Form>

            <h1>Table</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>comment</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>{data.comment}</td>
                                <td>
                                    <Button variant="danger" onClick={HandleClick}>削除</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default ComponentB;