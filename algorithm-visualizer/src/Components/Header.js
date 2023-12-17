import '../Pages/CSS/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import icon from '../img/icon.png';

export const Header = () => {
    const navigate = useNavigate();

    return (
    <Navbar className="Header">
        <Container className='Container'>
            <Nav.Link onClick={() => navigate("/")}>
                <img src={icon} className='icon'/>
            </Nav.Link>
        </Container>
        <Container className='Container'>
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
        </Container>
        <Container className='Container'>
            <Nav.Link onClick={() => navigate("/Sorting")}>Sorting</Nav.Link>
        </Container>
        <Container className='Container'>
            <Nav.Link onClick={() => navigate("/Search")}>Search</Nav.Link>
        </Container>
    </Navbar>
    );
};