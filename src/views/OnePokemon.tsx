import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContex'
import { pokeColors } from '../config/constans'
import './index'
import PokeStats from '../components/PokeCard/PokeStats/PokeStats'
import PokeAbout from '../components/PokeCard/PokeAbout/PokeAbout'
import { Container } from 'react-bootstrap'

const OnePokemon: React.FC = () => {
  const { pokemon, getOnePokemon } = useContext(PokemonContext)
  const { name } = useParams()
  const pokeColor = pokeColors[pokemon?.types[0]?.type?.name]
  const colorBase = { color: pokeColor?.background }

  useEffect(() => {
    getOnePokemon(name)
  }, [name])

  return (
    <>
      <Container className='poke-card'>
        <div className='poke-card--header'>
          <p className='poke-name'>
            {pokemon?.name}
          </p>
          <span className='poke-id'>#{pokemon?.id.toString().padStart(4, '0')}</span>
        </div>
        <div className='poke-card--body'>
          <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt={pokemon?.name} className='home-img' />
          <div className='poke-card--body-types'>
            {pokemon?.types.map((t) => {
              return (
                <span key={t.type.name} style={pokeColors[t.type.name]}>
                  {t.type.name}
                </span>
              )
            })}
          </div>
          <PokeAbout colorBase={colorBase} pokemon={pokemon} />
          <PokeStats colorBase={colorBase} pokemon={pokemon} />
        </div>
      </Container>
    </>
  )
}

export default OnePokemon
