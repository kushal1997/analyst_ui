import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../components/Main'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Main}></Route>
    </Routes>
  )
}
