import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContex'

const OnePokemon: React.FC = () => {
  const { pokemon, getOnePokemon } = useContext(PokemonContext)
  const { name } = useParams()

  useEffect(() => {
    getOnePokemon(name)
  }, [name])

  return (
    <div className='d-flex justify-content-center mt-4'>
      <div className='d-flex'>
        <img
          className='p-4'
          style={{ width: '22rem' }}
          src={pokemon?.sprites.other.dream_world.front_default}
          alt={`Pokemon${pokemon?.name}`}
        />
        <div className='text-center'>
          <h3 className='poke-name'>{pokemon?.name}</h3>
          <div className='text-start'>
            <ul>
              {pokemon?.stats?.map(({ base_stat: value, stat: { name } }) => (
                <li key={name}>{name}: <span>{value}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnePokemon
