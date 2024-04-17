import React, { type FormEvent, useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
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
    <Container className='text-center mt-5'>
      <h1 className='mb-4'>Selecciona tu Pokémon</h1>
      <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
        <Form.Group className='mb-3'>
          <Form.Select
            style={{ maxWidth: '300px' }}
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
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
    </Container>
  )
}

export default SearchPage
