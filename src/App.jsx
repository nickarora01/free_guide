import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Experience from './components/Experience';
import Experiencelist from './components/Experiencelist';

const App = () => {
    return (
      <React.StrictMode>
      <Router>
          <Routes>
           
            <Route exact path="/experience-list" element={<Experiencelist/>}/>
            <Route exact path="/experience" element={<Experience/>}/>
          </Routes>
      </Router>
      </React.StrictMode>
    );
  }
  
  export default App;