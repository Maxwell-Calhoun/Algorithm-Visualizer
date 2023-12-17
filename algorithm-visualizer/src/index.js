import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

/*pages*/
import App from './Pages/App';
import Sorting from './Pages/Sorting';
import Search from './Pages/Search';
import Error404 from './Pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='/Sorting' element={<Sorting/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
