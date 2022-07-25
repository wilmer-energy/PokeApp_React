import logo from './logo.svg'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PokeDex from './components/PokeDex'
import PokeDetails from './components/PokeDetails'
import LogIn from './components/LogIn'
import pokeball from "./images/pokeball.png"



function App() {

  
  return (
    <HashRouter>
      <div>
        
        
        <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path='/pokedex' element={<PokeDex/>}/>
          <Route path='/pokedex/:id' element={<PokeDetails/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
