import axios from 'axios'
import { useEffect, useState } from 'react'
import { type IPokemon, type IPokemons, type IResult } from '../interfaces/pokemones'
import { initialPokemonState, initialPokemonsState, type PropsPokemons } from '../interfaces/data.interface'

const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon'

export const usePokemones = (): PropsPokemons => {
  const [data, setData] = useState<PropsPokemons['data']>(initialPokemonsState)
  const [pokemon, setPokemon] = useState<PropsPokemons['pokemon']>(initialPokemonState)

  const getData = (): void => {
    axios
      .get(`${URL_POKEMONS}?limit=10`)
      .then(response => {
        const data: IPokemons = response.data
        const allPokemon: IPokemons = {
          count: data.count,
          next: data.next,
          previous: data.previous,
          results: data.results.map((result: IResult) => ({
            name: result.name,
            url: result.url
          }))
        }
        setData(allPokemon)
      })
      .catch(error => {
        console.error('Error al obtener data', error)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  const getOnePokemon = (name: string | undefined): void => {
    axios
      .get(`${URL_POKEMONS}/pokemon/${name}`)
      .then(response => {
        const data: IPokemon = response.data
        setPokemon(data)
      })
      .catch(error => {
        console.error('Error al obtener data', error)
      })
  }

  return {
    data,
    setData,
    pokemon,
    setPokemon,
    getOnePokemon
  }
}
