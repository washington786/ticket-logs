import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavStyle.css';
import { Link } from 'react-router-dom'

function NavBar({ nav_list1, nav_list2 }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 m-0">
                    <Navbar bg="transparent" variant="light">
                        <Container className="justify-content-end align-items-center m-0 p-0">
                           
                            <Nav className="justify-content-end pt-4 d-flex nav-bar-to-style m-0 p-0">

                                <Link to={"/login"} className="links" >
                                    <h5 className="nav-links" id="link1">{nav_list1}</h5>
                                </Link> 


                                <Link to={"/loginAdmin"} className="links" >
                                    <h5 className="nav-links" id="link2">{nav_list2}</h5>
                                </Link>

                            </Nav>

                        </Container>

                    </Navbar>
                    <hr className='p-0 m-0' />
                </div>
            </div>
        </div>
    )
}

export default NavBar