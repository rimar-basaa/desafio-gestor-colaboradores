import { useState } from 'react'
import './App.css'
import {Buscador} from './assets/components/Buscador'
import {Alerta} from './assets/components/Alert'
import {Formulario} from './assets/components/Formulario'
import {Listado} from './assets/components/Listado'
import {Bdatos} from './assets/js/BaseColaboradores'

function App() {
  const [count, setCount] = useState(0)
  let Bdatos = {Bdatos};

  return (
    <>
      <Buscador></Buscador>
      <Listado></Listado>
      <Formulario></Formulario>
      <Alerta></Alerta>
    </>
  )
}

export default App
