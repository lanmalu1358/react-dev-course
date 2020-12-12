import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = (props) => {
    const [data, setData] = useState([])
    const backpage = () => {
        props.history.push('/')
    }


    useEffect(() => {
        console.log('useEffectが呼び出されました。');

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res, 'res check')
            }
            )
    }, []);


    const GetData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res, 'res check')
                setData(res.data)
            })
    }

    console.log(data)


    return (

        <>
            <div>ComponentB</div>
            <button onClick={backpage}>ホームへ戻る</button>
            <Link to="componentc">ComponentCへ移動</Link>


            <button onClick={GetData}>
                <p>GetData</p>
            </button>


            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dt, index) => {
                            return (
                                <tr key={index}>
                                    <td>{dt.userId}</td>
                                    <td>{dt.id}</td>
                                    <td>{dt.title}</td>
                                    <td>{dt.body}</td>
                                </tr>
                            )
                        })
                    }
                    {/*↓テスト用*/}
                    {/* <tr>  
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr> */}
                </tbody>
            </Table>

        </>
    )
}

export default ComponentB;