import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Inicio } from './pages/Inicio'
import { Cierre } from './pages/Cierre'
import { Precios } from './pages/Precios'
import { Calculos } from './pages/Calculos'

function App() {




  return (
    <>
    <BrowserRouter>
    <nav>
      <NavLink to='/'>Inicio</NavLink>
      <NavLink to='/cierre'>Cierre</NavLink>
      <NavLink to='/precios'>Precios</NavLink>
      <NavLink to='/calculos'>Calculo</NavLink>
    </nav>
      <Routes>
        <Route path='/' element={<Inicio />} /> 
        <Route path='/cierre' element={<Cierre />} /> 
        <Route path='/precios' element={<Precios  />} /> 
        <Route path='/calculos' element={<Calculos />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
