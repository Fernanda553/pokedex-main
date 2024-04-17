import { type IPokemon, type IPokemons } from './pokemones'

export const initialPokemonsState: IPokemons = {
  count: 0,
  next: '',
  previous: undefined,
  results: []
}

export const initialPokemonState: IPokemon = {
  abilities: [],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  id: 0,
  is_default: false,
  location_area_encounters: '',
  moves: [],
  name: '',
  order: 0,
  past_types: [],
  species: { name: '', url: '' },
  sprites: {
    back_default: '',
    back_female: undefined,
    back_shiny: '',
    back_shiny_female: undefined,
    front_default: '',
    front_female: undefined,
    front_shiny: '',
    front_shiny_female: undefined,
    other: {
      dream_world: { front_default: '' },
      home: { front_default: '', front_shiny: '', front_shiny_female: undefined },
      'official-artwork': { front_default: '' }
    },
    versions: {}
  },
  stats: [],
  types: [],
  weight: 0
}

export interface PropsPokemons {
  data: IPokemons
  setData: React.Dispatch<React.SetStateAction<IPokemons>>
  pokemon: IPokemon
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon>>
  getOnePokemon: (name: string | undefined) => void
}
