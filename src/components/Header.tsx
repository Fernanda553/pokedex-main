import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import pokeLogo from '../assets/imgs/poke_logo.png'

const Header: React.FC = () => {
  return (
    <header className='mb-4'>
      <Container fluid className='p-0 m-0'>
        <Navbar expand='lg' bg='dark' variant='dark' className='mb-3'>
          <Navbar.Brand>
            <NavLink to='/'>
              <img
                src={pokeLogo}
                height='32'
                className='d-inline-block align-top px-5'
                alt='React Bootstrap logo'
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Navbar>
      </Container>
    </header>

  )
}

export default Header
