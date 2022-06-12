import React from 'react'
import WelcomeImg from '../../images/welcome.png';
import './Welcome.css';
import {Link} from 'react-router-dom';

function Welcome() {
    return (
        <div className="container bg-transparent main-con-welcome">
            <div className="row">
                <div className="col-sm-5">
                    <img src={WelcomeImg} alt="welcome-img" />
                </div>
                <div className="col-sm-7 justify-content-center align-items-center content">
                    <div className="texts">
                        <h3 className="header-4">Welcome To Ticket Log Support System.</h3>
                        <span className="display-5 pt-2 pb-2 d-flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nemo temporibus explicabo eos minima quis.</span>

                        <div className="row buttons">
                            <div className="col-xs-4 pt-3 pb-5">
                                <Link to={'/register'}>
                                <button className="btn btn-danger me-3 mt-3">Get started as Client</button>
                                </Link>

                                <Link to={'/registerAdmin'}>
                                <button className="btn btn-light mt-3">Get started as Admin</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome