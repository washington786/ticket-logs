import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import NavBar from '../../components/navBar/NavBar';
import './Login.css';
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <>
      <NavBar nav_list1="LOGIN AS CLIENT" nav_list2="Login As Admin" />
      <div className="container d-flex justify-content-center align-items-center main-login-con">
        <div className="row">
          <div className="col-sm-12">

            <Card className="card p-0 mt-2">
              <Card.Body>
                <img src={Logo} alt="logo" className='logo' />
                {/* <Link to={"/clientDashboard"}> */}
                <h5 className="d-flex text-center justify-content-center align-items-center mt-2">Client Login</h5>
                {/* </Link> */}

                <div className="form-con p-2 d-flex">
                  <Form className="form">

                    <Form.Group className="mb-3 form-input" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email address" />
                    </Form.Group>

                    <Form.Group className="mb-3 form-input" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Text className="text-muted">
                      Forgot Your Password?
                    </Form.Text>

                    <Link to={"/clientDashboard"} id="btnLink">
                    <Button variant="primary" type="submit" className="btn-login">
                      LOGIN
                    </Button>
                    </Link>

                  </Form>
                  <h4 className="text1">Don't have an account? <Link id="link" to={"/register"}>Sign Up</Link></h4>
                </div>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    </>
  )
}

export default LoginScreen