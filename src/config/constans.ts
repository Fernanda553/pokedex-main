export interface PokeColors {
  [key: string]: {
    background: string
    color: string
  }
}

export const pokeColors: PokeColors = {
  bug: { background: '#739f40', color: '#fff' },
  dark: { background: '#707070', color: '#fff' },
  dragon: { background: 'linear-gradient(#54a4cf, #f16e58)', color: '#fff' },
  electric: { background: '#eed535', color: '#000' },
  fairy: { background: '#fcb9e9', color: '#000' },
  fighting: { background: '#d56724', color: '#fff' },
  fire: { background: '#fd7d25', color: '#fff' },
  flying: { background: 'linear-gradient(#3cc7ef, #bcbab9)', color: '#fff' },
  ghost: { background: '#7b62a3', color: '#fff' },
  grass: { background: '#9bcb50', color: '#000' },
  ground: { background: 'linear-gradient(#f7de3f, #ab9843)', color: '#000' },
  ice: { background: '#51c3e7', color: '#fff' },
  normal: { background: '#a3acaf', color: '#fff' },
  poison: { background: '#b97fc8', color: '#fff' },
  psychic: { background: '#f366b9', color: '#fff' },
  rock: { background: '#a38c22', color: '#fff' },
  steel: { background: '#9eb7b7', color: '#fff' },
  water: { background: '#4592c3', color: '#fff' }
}
