import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainPokemonPage from './pages/Pokemon/MainPokemonPage'
import { ThemeContext } from './themeContext/themeContext'

function Root() {
  return  (
    <Outlet/>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("#E85382")

  useEffect(()=> {
    document.body.style.setProperty("--app-color", theme);
  }, [theme])

  const themeValues = {
    theme,
    setTheme
  }

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
    <ThemeContext.Provider value={themeValues}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
    </>
  )
}

export default App
