import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

const ComponentA = () => {
    return (
        <>
            <div>ComponentA</div>
            <Button variant="praimary">Hello World</Button>
            <Link to="componentb">ComponentBへ移動</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

            <Nav defaultActiveKey="/">
                Menu<br />
                .<Nav.Link href="/">Home</Nav.Link><br />
                .<Nav.Link href="/componentb">ComponentB</Nav.Link><br />
                .<Nav.Link href="/componentc">ComponentC</Nav.Link><br />
            </Nav>
        </>
    )
}

export default ComponentA;