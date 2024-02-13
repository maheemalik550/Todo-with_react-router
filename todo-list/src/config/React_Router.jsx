import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { Private_Router } from './Private_Rouer'
import { Public_Router } from './Public_Router'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route element={<Private_Router/>} >
      <Route path='' element={<Dashboard/>} />
    </Route>
    <Route element={<Public_Router/>} >
    <Route path='login' element={<Login/>} />
    </Route>
    </Route>
  )
)


export const React_Router = () => {
  return (
    <RouterProvider router={router} />
  )
}
