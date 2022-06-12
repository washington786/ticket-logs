import React, { useState } from 'react'
import { Navbar, Container, Nav, Modal, Table } from 'react-bootstrap';
import './NavStyle.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const NavBarUser = ({ title }) => {

    const [showModal, setShowModal] = useState(false);
    const handleModalPopUp = () => { setShowModal(true) };
    const handleModalClose = () => { setShowModal(false) };

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 m-0">
                    <Navbar bg="transparent" variant="light">
                        <Container className="d-flex justify-content-space-between align-items-center">

                            <Navbar.Brand>
                                <img src={Logo} alt="logo" className="logo-img" />
                            </Navbar.Brand>

                            <Nav className="justify-content-end pt-4">

                                <div className="btn btn-light bg-transparent outline-none clientNavBtns" onClick={handleModalPopUp}>
                                    <h3 className="nav-links">{title}</h3>
                                </div>

                                <div className="btn btn-light bg-transparent outline-none clientNavBtns">
                                    <Link to={"/login"} className="links" id="link1">
                                        <h3 className="nav-links">Logout</h3>
                                    </Link>
                                </div>
                            </Nav>

                        </Container>

                    </Navbar>
                    <hr className='p-0 m-0' />

                    {/* modal */}
                    <Modal
                        show={showModal}
                        onHide={handleModalClose}
                        backdrop="static"
                        keyboard={false}
                        fullscreen={true}
                        size={'xl'}
                        className="clientModal"
                        dialogClassName='clientDialog'
                        scrollable={true}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>My Ticket Tickets</Modal.Title>
                            {/* <p>please enter your ticket details and submit.</p> */}

                        </Modal.Header>
                        <Modal.Body>
                            <div className="container mt-2">
                                <div className="row p-0 m-0">
                                    <div className="col-sm-8 p-0 m-0">
                                        <span className="sub-client-nav text-muted p-0 m-0">No of Tickets(4)</span>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-12">
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
                                                <tr>
                                                    <td>23ddf4</td>
                                                    <td>Network Cables</td>
                                                    <td>disconnected from the main servers.</td>
                                                    <td>IT</td>
                                                    <td>High</td>
                                                    <td>14/06/2021</td>
                                                    <td>In-progress</td>
                                                </tr>
                                                <tr>
                                                    <td>23ddf4</td>
                                                    <td>Network Cables</td>
                                                    <td>disconnected from the main servers.</td>
                                                    <td>IT</td>
                                                    <td>High</td>
                                                    <td>14/06/2021</td>
                                                    <td>In-progress</td>
                                                </tr>
                                                <tr>
                                                    <td>23ddf4</td>
                                                    <td>Network Cables</td>
                                                    <td>disconnected from the main servers.</td>
                                                    <td>IT</td>
                                                    <td>High</td>
                                                    <td>14/06/2021</td>
                                                    <td>In-progress</td>
                                                </tr>
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
                                    </div>
                                </div>

                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default NavBarUser