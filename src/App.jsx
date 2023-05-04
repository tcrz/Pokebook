import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainPokemonPage from './pages/Pokemon/MainPokemonPage'

function Root() {
  return  (
    <Outlet/>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const theme = "#E85382"

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage/>} />
        <Route path="/all" element={<MainPokemonPage/>} />
      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
