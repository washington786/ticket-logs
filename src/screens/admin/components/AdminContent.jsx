import React from 'react';
import { Form, Divider } from 'react-bootstrap';
import './style.css';
import TableComponent from './Table';

const AdminContent = () => {
    return (

        <div className="container content-con mt-4">
            <div className="container cont-con2">

                <div className="row">
                    <div className="col-sm-12">
                        <h5 className="text-mute">Hy David Laos</h5>
                        <p className="text-mute">please view the tickets being logged below and make sure to respond to the user by email.</p>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-sm-10">
                        <h6 className="text-muted">Number of Tickets(10)</h6>
                    </div>

                    <div className="col-sm-2">
                        <Form.Select aria-label="Default select example">
                            <option>Filter by Priority</option>
                            <option value="low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="high">High</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="row table-row mt-2">
                    <div className="col-sm-12">
                        <TableComponent />
                    </div>
                </div>

            </div>
            {/* <div className="container bg-dark">
                <p>filters</p>
            </div> */}
        </div>
    )
}

export default AdminContent