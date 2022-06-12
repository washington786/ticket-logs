import React from 'react'
import Welcome from '../BodyOnWelcome/Welcome'
import NavBar from '../navBar/NavBar'

const NavAndWelcome = () => {
  return (
    <>
        <NavBar nav_list1="LOGIN AS CLIENT" nav_list2="Login As Admin"/>
        <Welcome/>
    </>
  )
}

export default NavAndWelcome