import { IPokemon } from '../../../interfaces/pokemones'
import PokeTitle from '../PokeTitle/PokeTitle'

interface PokeAboutProps {
  colorBase: { color: string }
  pokemon: IPokemon
}

const PokeAbout: React.FC<PokeAboutProps> = ({ colorBase, pokemon }) => {
  return (
    <>
      <PokeTitle colorBase={colorBase} title='About' />
      <div className='row justify-content-between w-100 mb-4'>
        <div className='col-6 text-center d-flex flex-column gap-3'>
          <span className='about-title'>Weight</span>
          <div className='d-flex flex-row gap-3 justify-content-center'>
            <i className='fa-solid fa-weight-hanging' style={colorBase} />
            <span className='about-value'>{pokemon?.weight / 10} kg</span>
          </div>
        </div>
        <div className='col-6 text-center d-flex flex-column gap-3 border-start'>
          <span className='about-title'>Height</span>
          <div className='d-flex flex-row gap-3 justify-content-center'>
            <i className='fa-solid fa-ruler-vertical' style={colorBase} />
            <span className='about-value'>{pokemon?.height / 10} mts</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokeAbout
