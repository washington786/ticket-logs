import React from 'react'
import './Register.css';
import Logo from '../../images/logo.png'
import { Button, Card, Form } from 'react-bootstrap';
import NavBar from '../../components/navBar/NavBar';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    return (
        <>
            <NavBar nav_list1="LOGIN AS CLIENT" nav_list2="Login As Admin" />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-sm-12 pt-3">
                        <Card className="card p-0 mt-2">
                            <Card.Body>
                                <img src={Logo} alt="logo" className='logo' />
                                <h5 className="d-flex text-center justify-content-center align-items-center mt-2">Register As Client</h5>

                                <div className="form-con p-1 d-flex">
                                    <Form className="form">

                                        <Form.Group className="mb-2 form-input" controlId="formBasicName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>

                                        <Form.Group className="mb-2 form-input" controlId="formBasicName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>

                                        <Form.Group className="mb-2 form-input" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email address" />
                                        </Form.Group>

                                        <Form.Group className="mb-2 form-input" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group className="mb-2 form-input" controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm Password" />
                                        </Form.Group>

                                        <Link to={"/clientDashboard"} id="btnLink">
                                            <Button variant="primary" type="submit" className="btn-login">
                                                REGISTER
                                            </Button>
                                        </Link>

                                    </Form>
                                    <h4 className="text1">Already have an account? <Link to={"/login"} id="link">Sign In</Link></h4>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterScreen