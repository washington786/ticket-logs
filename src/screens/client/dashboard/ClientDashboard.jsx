import React from 'react'
import CDashboard from '../../../components/ClientDashboardComponents/cDashboard';
import NavBarUser from '../../../components/navBar/NavBarUser';
import './clientDashboard.css';

const ClientDashboard = () => {
    return (
        <>
            <NavBarUser title="My Tickets" />
            <CDashboard/>
        </>
    )
}

export default ClientDashboard