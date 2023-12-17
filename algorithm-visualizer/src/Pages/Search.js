import './CSS/Search.css';
import { Footer } from '../Components/Footer';
import wrench from '../img/wrench.png'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Search() {
    const navigate = useNavigate();
    return (
        <div className="Search">
            <img className='wrenchImg' src={wrench} alt="wrench"/>
            <div className='Construction'>
                <h1>Visualization Under Construction</h1>
                <Button variant="secondary" size="lg" onClick={() => navigate("/")}>
                    Back Home
                </Button>
            </div>
            <Footer/>
        </div>
    );
}