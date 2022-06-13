import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

export default function Protected_Route ()  {

    let isAuth = window.sessionStorage.getItem('TokenValue')

  return isAuth ? <Outlet/> : <Navigate to = "/login" />
};