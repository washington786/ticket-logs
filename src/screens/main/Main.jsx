import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from '../../components/Routers/Routers';

const Main = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12">
                <Routers/>
            </div>
        </div>
    </div>
  )
}

export default Main