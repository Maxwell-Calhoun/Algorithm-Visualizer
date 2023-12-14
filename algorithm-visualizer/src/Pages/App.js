import Button from 'react-bootstrap/Button';
import './CSS/App.css';

export default function App() {
  //const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Algorithm Visualizer</h1>
        <h3>Select algorithms from below to see the visualizations</h3>
      </header>
      <body className="App-body">
        <div className="Algorithms">
          <div>
          <Button variant="secondary" size="lg" onClick={() => null}>
            Sorting Algorithms
          </Button>
          </div>
          <div>
          <Button variant="secondary" size="lg" onClick={() => null}>
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
      </body>
      <footer className="App-footer"> 
        @TODO: GITHUB LINK
      </footer>
    </div>
  );
}