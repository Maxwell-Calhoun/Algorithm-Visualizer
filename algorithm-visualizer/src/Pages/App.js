import './CSS/App.css';
import { Footer } from '../Components/Footer';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Algorithm Visualizer</h1>
        <h3>Select algorithms from below to see the visualizations</h3>
      </header>
      <div className="App-body">
        <div className="Algorithms">
          <div>
          <Button className='buttons' variant="secondary" size="lg" onClick={() => navigate("/Sorting")}>
            Sorting Algorithms
          </Button>
          </div>
          <div>
          <Button className='buttons' variant="secondary" size="lg" onClick={() => navigate("/Search")}>
            Search Algorithms
          </Button>
          </div>
        </div>
        {/* keeping for potential future implemenations 
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </div>
      <Footer/>
    </div>
  );
}
export default App;