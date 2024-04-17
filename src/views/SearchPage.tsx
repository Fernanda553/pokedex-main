import React, { type FormEvent, useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { PokemonContext } from '../context/PokemonContex'
import { useNavigate } from 'react-router-dom'

const SearchPage: React.FC = () => {
  const { data } = useContext(PokemonContext)
  const [pokemon, setPokemon] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(data)
    if (pokemon.trim() === '') return // Verificar si pokemon está definido

    navigate(`/pokemones/${pokemon}`)
  }

  return (
    <div className='text-center'>
      <h1 className='m-3'>Selecciona tu Pokémon</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Select
            className='m-auto text-center'
            style={{ width: '30rem' }}
            aria-label='Default select example'
            value={pokemon}
            onChange={(e) => { setPokemon(e.target.value) }}
          >
            <option disabled value=''>Selecciona un Pokémon</option>
            {data?.results?.map((pokemon) => (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant='dark' type='submit'>
          Ver detalle
        </Button>
      </Form>
    </div>
  )
}

export default SearchPage
