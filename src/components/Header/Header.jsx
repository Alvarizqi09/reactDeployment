import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
    <Navbar expand="lg" className="bg-body-white">
        <h4 className="px-5">Simple Product</h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="awal" id="basic-navbar-nav">
          <Nav className="navbar ms-auto px-5">
            <Nav.Link 
            className="text-white text-decoration-none px-3 py-2 rounded-4 bg-primary" 
            href="#home"
            onClick={() => navigate('/')}>Landing Page</Nav.Link>
            <Nav.Link className="text-primary" href="#link">Features</Nav.Link>
            <Nav.Link className="text-primary" href="#link">Pricing</Nav.Link>
            <Nav.Link className="text-primary" href="#link">FAQs</Nav.Link>
            <Nav.Link className="text-primary" href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header