import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Inicio } from './pages/Inicio'
import { Cierre } from './pages/Cierre'
import { Precios } from './pages/Precios'
import { Calculos } from './pages/calculos/Calculos'
import { CalculoReal } from './pages/calculos/CalculoRealGeneral'
import { Navbar } from './components/form/Nabvar'

function App() {




  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} /> 
        <Route path='/cierre' element={<Cierre />} /> 
        <Route path='/precios' element={<Precios  />} /> 
        <Route path='/calculos' element={<Calculos />} />
        <Route path='/calculoGeneral' element={<CalculoReal />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
