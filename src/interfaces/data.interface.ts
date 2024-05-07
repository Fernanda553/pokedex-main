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
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: '',
          back_gray: '',
          back_transparent: '',
          front_default: '',
          front_gray: '',
          front_transparent: ''
        },
        yellow: {
          back_default: '',
          back_gray: '',
          back_transparent: '',
          front_default: '',
          front_gray: '',
          front_transparent: ''
        }
      },
      'generation-ii': {
        crystal: {
          back_default: '',
          back_shiny: '',
          back_shiny_transparent: '',
          back_transparent: '',
          front_default: '',
          front_shiny: '',
          front_shiny_transparent: '',
          front_transparent: ''
        },
        gold: {
          back_default: '',
          back_shiny: '',
          front_default: '',
          front_shiny: '',
          front_transparent: ''
        },
        silver: {
          back_default: '',
          back_shiny: '',
          front_default: '',
          front_shiny: '',
          front_transparent: ''
        }
      },
      'generation-iii': {
        emerald: {
          front_default: '',
          front_shiny: ''
        },
        'firered-leafgreen': {
          back_default: '',
          back_shiny: '',
          front_default: '',
          front_shiny: ''
        },
        'ruby-sapphire': {
          back_default: '',
          back_shiny: '',
          front_default: '',
          front_shiny: ''
        }
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default: '',
          back_shiny: '',
          back_shiny_female: undefined,
          back_female: undefined,
          front_default: '',
          front_shiny: '',
          front_shiny_female: undefined,
          front_female: undefined
        },
        'heartgold-soulsilver': {
          back_default: '',
          back_shiny: '',
          back_shiny_female: undefined,
          back_female: undefined,
          front_default: '',
          front_shiny: '',
          front_shiny_female: undefined,
          front_female: undefined
        },
        platinum: {
          back_default: '',
          back_shiny: '',
          back_shiny_female: undefined,
          back_female: undefined,
          front_default: '',
          front_shiny: '',
          front_shiny_female: undefined,
          front_female: undefined
        }
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default: '',
            back_shiny: '',
            back_shiny_female: undefined,
            back_female: undefined,
            front_default: '',
            front_shiny: '',
            front_shiny_female: undefined,
            front_female: undefined
          },
          back_default: '',
          back_shiny: '',
          back_shiny_female: undefined,
          back_female: undefined,
          front_default: '',
          front_shiny: '',
          front_shiny_female: undefined,
          front_female: undefined
        }
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: '',
          front_female: undefined,
          front_shiny: '',
          front_shiny_female: undefined
        },
        'x-y': {
          front_default: '',
          front_female: undefined,
          front_shiny: '',
          front_shiny_female: undefined
        }
      },
      'generation-vii': {
        icons: {
          front_default: '',
          front_female: undefined
        },
        'ultra-sun-ultra-moon': {
          front_default: '',
          front_shiny: '',
          front_shiny_female: undefined,
          front_female: undefined
        }
      },
      'generation-viii': {
        icons: {
          front_default: '',
          front_female: undefined
        }
      }
    }
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
