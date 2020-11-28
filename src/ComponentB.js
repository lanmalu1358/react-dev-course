import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import axios from 'axios'

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

    // const Table = GetData.map((axios) => {

    // });



    return (

        <>
            <div>ComponentB</div>
            <button onClick={backpage}>ホームへ戻る</button>
            <Link to="componentc">ComponentCへ移動</Link>



            {/* <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{res.GetData.userID}</td>
                        <td>{res.GetData.ID}</td>
                        <td>{res.GetData.Title}</td>
                        <td>{res.GetData.Body}</td>
                    </tr>
                </tbody>
            </Table> */}


            <button onClick={GetData}>
                <a>GetData</a>
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
                                <tr>
                                    <td>{dt.userId}</td>
                                    <td>{dt.id}</td>
                                    <td>{dt.title}</td>
                                    <td>{dt.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </>
    )
}

export default ComponentB;