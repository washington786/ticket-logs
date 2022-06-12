import React from 'react';
import {Routes, Route} from 'react-router-dom'
import LoginScreen from '../../screens/login/LoginScreen';

const CommonRouters = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<LoginScreen/>}/>
            <Route path={'/login'} element={<LoginScreen/>}/>
            <Route path={'/register'} element={<LoginScreen/>}/>
        </Routes>
    </div>
  )
}

export default CommonRouters