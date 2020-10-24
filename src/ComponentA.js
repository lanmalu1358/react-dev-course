import React from 'react'
import './ComponentA.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

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
                <ul>
                    Menu
                    <li><Nav.Link href="/">Home</Nav.Link></li>
                    <li><Nav.Link href="/componentb">ComponentB</Nav.Link></li>
                    <li><Nav.Link href="/componentc">ComponentC</Nav.Link></li>
                </ul>
            </Nav>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ComponentA;