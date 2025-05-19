import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(100);
  const [esconder, setEsconder] = useState(false);

  const handleChange = () => {
    setValue(value+100);
  }

  const handleEsconder = () => {
    if(esconder)
      setEsconder(false);
    else
      setEsconder(true);
  }

  return (
    <>
      <span>Valor: {value}</span>
      <button onClick={handleChange}>Aumentar!</button>
      <div>
        <p className={esconder ? "esconder" : " "}>Marcioooooooo!</p>
        <button onClick={handleEsconder}>{esconder ? "Mostrar" : "Esconder"}</button>
      </div>
    </>
  )
}

export default App
