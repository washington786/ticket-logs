import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap';
import './NavStyle.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const NavBarAdmin = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 m-0 p-0">
                    <Navbar bg="transparent" variant="light">
                        <Container className="d-flex justify-content-space-between align-items-center p-0 m-0">

                            <Navbar.Brand>
                                <img src={Logo} alt="logo" className="logo-img m-0 p-0" />
                            </Navbar.Brand>

                            <Nav className="justify-content-end pt-4">

                                <div className="btn clientNavBtn">
                                    <Link to={"/loginAdmin"} className="links d-flex align-items-center justify-content-center" id="link1">
                                        <i class="bi bi-box-arrow-right logout-icon"></i>
                                        <h3 className="nav-links logout-btn ps-2 pt-2">Logout</h3>
                                    </Link>
                                </div>
                            </Nav>
                        </Container>
                    </Navbar>
                    <hr className='p-0 m-0' />
                </div>
            </div>
        </div>
    )
}

export default NavBarAdmin