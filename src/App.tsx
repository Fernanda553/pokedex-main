import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, OnePokemon, NotFound } from './views/index'
import Header from './components/Header'
import { usePokemones } from './hooks/usePokemones'
import { PokemonContext } from './context/PokemonContex'

const App: React.FC = () => {
  const {
    data,
    setData,
    pokemon,
    setPokemon,
    getOnePokemon
  } = usePokemones()

  const allState = {
    data,
    setData,
    pokemon,
    setPokemon,
    getOnePokemon
  }

  return (
    <PokemonContext.Provider value={allState}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemones/:name' element={<OnePokemon />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  )
}

export default App
