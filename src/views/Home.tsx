import { Col, Container, Row } from 'react-bootstrap'
import SearchPage from './SearchPage'
import pikachuHome from '../assets/imgs/pikachu_home.png'
import masetroPokemon from '../assets/imgs/masetro_pokemon.png'

const Home: React.FC = () => {
  return (
    <Row>
      <Col xs={3}>
        <SearchPage />
      </Col>
      <Col xs={9}>
        <Container className='d-flex flex-column gap-4 justify-content-center align-items-center h-auto'>
          <h1 className='display-6 text-center'>
            Bienvenido
            <img src={masetroPokemon} className='card-img-top' />
          </h1>
          <img src={pikachuHome} alt='Pikachu' className='home-img' draggable='false' />
        </Container>
      </Col>
    </Row>

  )
}

export default Home
