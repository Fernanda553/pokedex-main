import { createContext } from 'react'
import { type PropsPokemons } from '../interfaces/data.interface'

export const PokemonContext = createContext<PropsPokemons>({} as any)
