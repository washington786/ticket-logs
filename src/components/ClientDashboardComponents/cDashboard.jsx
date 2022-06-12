import React, { useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import '../../screens/client/dashboard/clientDashboard.css';
import Img2 from '../../images/c.svg'

const CDashboard = () => {

    const [showModal, setShowModal] = useState(false);

    /* handle modal opening/popping onto the screen */
    const handleModalPopUp = () => { setShowModal(true) };

    /* handle modal on close */
    const handleModalClose = () => { setShowModal(false) };

    return (
        <div className="container mt-3 dash-con">
            <div className="row">
                <div className="col-sm-12">
                    <h5 className="user-name">Hy Daniel Washington</h5>
                    <span className="cSubs">Please click on the button below to create a ticket log for support.</span>

                    <Button variant="danger" type="submit" className="ticket-login" onClick={handleModalPopUp}>Log A Ticket</Button>

                    <img src={Img2} alt="vector-img" className="vector-img" />
                </div>

                <Modal
                    show={showModal}
                    onHide={handleModalClose}
                    backdrop="static"
                    keyboard={false}
                    // fullscreen={true}
                    size={'xl'}
                    className="clientModal"
                    dialogClassName='clientDialog'
                    scrollable={true}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Log A Ticket</Modal.Title>
                        {/* <p>please enter your ticket details and submit.</p> */}

                    </Modal.Header>
                    <Modal.Body>
                        <div className="container mt-2">

                            {/* form */}
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="example: Network cables"
                                        autoFocus
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                {/* fields */}
                                <Form.Label className="mt-2 mb-1">Field/Department</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Field/Department</option>   
                                    <option value="IT">IT</option>
                                    <option value="Sales">Sales</option>
                                    <option value="accounts">Accounts</option>
                                </Form.Select>

                                {/* <Dropdown className="dropdown w-100">
                                    <Dropdown.Toggle id="field" variant="light">
                                        
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="light">
                                        <Dropdown.Item active>
                                            IT
                                        </Dropdown.Item>
                                        <Dropdown.Item>Sales</Dropdown.Item>
                                        <Dropdown.Item>Accounts</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}

                                {/* priorities */}
                                <Form.Label className="mt-2 mb-1">Priority</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Priority</option>
                                    <option value="IT">Low</option>
                                    <option value="Sales">Medium</option>
                                    <option value="accounts">High</option>
                                </Form.Select>
                                {/* <Dropdown className="dropdown mt-3">
                                    <Dropdown.Toggle id="field" variant="light">
                                        Priority
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="light">
                                        <Dropdown.Item active>
                                            Low
                                        </Dropdown.Item>
                                        <Dropdown.Item>Medium</Dropdown.Item>
                                        <Dropdown.Item>High</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}

                                {/* location of user reporting:getting live location the user*/}
                                <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label>My Current Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="123 Van voer Str,Ladine,Polokwane"
                                        disabled
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleModalClose} className="btns-modal">
                            CANCEL
                        </Button>
                        <Button variant="success" className="btns-modal">SUBMIT</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div >
    )
}

export default CDashboard