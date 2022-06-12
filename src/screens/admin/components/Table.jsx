import React, { useState } from 'react';
import { Button, Form, ListGroup, Modal, Table } from 'react-bootstrap';
import './table.css';

const TableComponent = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleModalPopUp1 = () => { setShowModal1(true) };
    const handleModalPopUp2 = () => { setShowModal2(true) };

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Field</th>
                        <th>Priority</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>23ddf4</td>
                        <td>Network Cables</td>
                        <td>disconnected from the main servers.</td>
                        <td>IT</td>
                        <td>High</td>
                        <td>14/06/2021</td>
                        <td>In-progress</td>
                        <td>
                            <button className="btn btn-secondary me-2 action-btn" onClick={handleModalPopUp1}>View</button>
                            <button className="btn btn-dark action-btn" onClick={handleModalPopUp2}>Reply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>23ddf4</td>
                        <td>Network Cables</td>
                        <td>disconnected from the main servers.</td>
                        <td>IT</td>
                        <td>High</td>
                        <td>14/06/2021</td>
                        <td>In-progress</td>
                        <td>
                            <button className="btn btn-secondary me-2 action-btn">View</button>
                            <button className="btn btn-dark action-btn">Reply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>23ddf4</td>
                        <td>Network Cables</td>
                        <td>disconnected from the main servers.</td>
                        <td>IT</td>
                        <td>High</td>
                        <td>14/06/2021</td>
                        <td>In-progress</td>
                        <td>
                            <button className="btn btn-secondary me-2 action-btn">View</button>
                            <button className="btn btn-dark action-btn">Reply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>23ddf4</td>
                        <td>Network Cables</td>
                        <td>disconnected from the main servers.</td>
                        <td>IT</td>
                        <td>High</td>
                        <td>14/06/2021</td>
                        <td>In-progress</td>
                        <td>
                            <button className="btn btn-secondary me-2 action-btn">View</button>
                            <button className="btn btn-dark action-btn">Reply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>23ddf4</td>
                        <td>Network Cables</td>
                        <td>disconnected from the main servers.</td>
                        <td>IT</td>
                        <td>High</td>
                        <td>14/06/2021</td>
                        <td>In-progress</td>
                        <td>
                            <button className="btn btn-secondary me-2 action-btn">View</button>
                            <button className="btn btn-dark action-btn">Reply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>23ddf4</td>
                        <td>Network Cables</td>
                        <td>disconnected from the main servers.</td>
                        <td>IT</td>
                        <td>High</td>
                        <td>14/06/2021</td>
                        <td>In-progress</td>
                        <td>
                            <button className="btn btn-secondary me-2 action-btn">View</button>
                            <button className="btn btn-dark action-btn">Reply</button>
                        </td>
                    </tr>


                </tbody>
            </Table>

            {/* modals for both view and reply */}
            {/* view ticket details modal */}
            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal1}
                onHide={() => setShowModal1(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ticket And User Details:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">

                        <h6>Ticket Information</h6>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Subject</th>
                                    <th>Description</th>
                                    <th>Field</th>
                                    <th>Priority</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>23ddf4</td>
                                    <td>Network Cables</td>
                                    <td>disconnected from the main servers.</td>
                                    <td>IT</td>
                                    <td>High</td>
                                    <td>14/06/2021</td>
                                    <td>In-progress</td>
                                </tr>

                            </tbody>
                        </Table>

                        <h6>Client Information</h6>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <i class="bi bi-person pe-2"></i>
                                            First Name
                                        </ListGroup.Item>
                                        <ListGroup.Item><i class="bi bi-person pe-2"></i>Last Name</ListGroup.Item>
                                        <ListGroup.Item><i class="bi bi-envelope-fill pe-2"></i>Email</ListGroup.Item>
                                        <ListGroup.Item><i class="bi bi-geo-alt-fill pe-2"></i>Location</ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className="col-sm-8">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Daniel</ListGroup.Item>
                                        <ListGroup.Item>Washington</ListGroup.Item>
                                        <ListGroup.Item>dk@gmail.com</ListGroup.Item>
                                        <ListGroup.Item>123 Johanna Str, Cabbage, Limo.</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>

                    </div>

                </Modal.Body>
            </Modal>

            {/* modal 2: displays a form to respond to user ticket and send an email to the ticket logger*/}
            <Modal show={showModal2} fullscreen={true} onHide={() => setShowModal2(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Ticket Feedback Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-3">
                        <div className="row d-flex">
                            <div className="col-sm-8 justify-content-center align-items-center m-auto">
                                <Form>
                                    <Form.Text>Enter all the details below and submit.</Form.Text>

                                    <Form.Group className="mb-3 form-input mt-3" controlId="formBasicEmail">
                                        <Form.Label>Client Email address</Form.Label>
                                        <Form.Control type="email" placeholder="dkwas@gmail.com" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 form-input" controlId="formBasicEmail">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="enter your subject" />
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 form-input" controlId="formBasicEmail">
                                        <Form.Label>My Current Location</Form.Label>
                                        <Form.Control type="text" placeholder="123 Val Str, Moon" disabled/>
                                    </Form.Group>

                                    <Button variant="success" type="submit" className="feedback-btn">SUBMIT NOW</Button>

                                </Form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TableComponent