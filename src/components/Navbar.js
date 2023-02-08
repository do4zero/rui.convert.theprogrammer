import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navbarData } from '../data/navbar';
import IcArrowSignUp from '../assets/icons/ic-signup-arrow.svg';

const NavLink = ({ id, href, text }) => (
  <Nav.Link
    href={`${href ? href : '#'}`}
    className={`uppercase nav-link ${
      id === 1 ? 'nav-link--active' : ''
    }`}
  >
    {text}
  </Nav.Link>
);

const SignUpButton = () => (
  <div className={'btn-signup'}>
    Sign Up
    <img src={IcArrowSignUp} alt='ic-arrow-signup' />
  </div>
);

const Navigation = () => {
  return (
    <Navbar expand='lg' className='navbar-bg' variant='dark'>
      <Container fluid>
        <Navbar.Brand href='#home' className='brand'>
          <span className='primary-color'>The</span>Programmer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='mx-auto'>
            {navbarData &&
              navbarData.map((props) => (
                <NavLink key={props.id} {...props} />
              ))}
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <Nav className='ms-auto'>
            <SignUpButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
