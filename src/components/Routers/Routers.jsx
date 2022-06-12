import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AdminDashboard from '../../screens/admin/dashboard/AdminDashboard'
import ClientDashboard from '../../screens/client/dashboard/ClientDashboard'
import LoginAdmin from '../../screens/login/LoginAdmin'
import LoginScreen from '../../screens/login/LoginScreen'
import RegisterAdmin from '../../screens/Register/RegisterAdmin'
import RegisterScreen from '../../screens/Register/RegisterScreen'
import NavAndWelcome from '../NavAndWelcome/NavAndWelcome'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<NavAndWelcome/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/register" element={<RegisterScreen/>}/>
            <Route path="/loginAdmin" element={<LoginAdmin/>}/>
            <Route path="/registerAdmin" element={<RegisterAdmin/>}/>
            <Route path="/clientDashboard" element={<ClientDashboard/>}/>

            {/* admin route: will consist of the layouts for the dashboard of the admin */}
            <Route path="/adminDashboard" element={<AdminDashboard/>}>

            </Route>
        </Routes>
    </div>
  )
}

export default Routers