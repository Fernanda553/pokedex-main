import { useContext } from 'react'
import PokeTitle from '../PokeTitle/PokeTitle'
import { PokemonContext } from '../../../context/PokemonContex'
import { IPokemon } from '../../../interfaces/pokemones'

interface PokeStatsProps {
  colorBase: { color: string }
  pokemon: IPokemon
}

const PokeStats: React.FC<PokeStatsProps> = ({ colorBase }) => {
  const { pokemon } = useContext(PokemonContext)
  return (
    <>
      <PokeTitle colorBase={colorBase} title='Base Stats' />
      <div className='w-100'>
        {pokemon?.stats?.map(({ base_stat: value, stat: { name } }) => (
          <div
            key={name}
            className='row text-center align-items-center justify-content-center'
          >
            <div className='col-12 col-md-3 about-title' style={{ textTransform: 'capitalize', fontSize: '14px' }}>
              {name}
            </div>
            <div className='col-2 d-none d-md-block' style={{ fontSize: '12px' }}>{value} / 100</div>
            <div className='col-12 col-md-7 border-md-start mb-3 mb-md-0'>
              <div className='progress my-2 poke-bar' style={{ background: `${colorBase?.color}50` }} role='progressbar' aria-label={name} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
                <div className='progress-bar' style={{ width: `${value <= 100 ? value : 100}%`, background: colorBase?.color }}>
                  {`${value <= 100 ? value : 100}%`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PokeStats
