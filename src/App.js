import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home () {
  return <h1>Welcome to the Home Page!</h1>;
}

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <h1 style={ { color: 'black' } }>Test Heading</h1>

      </Routes>
    </Router>
  );
}

export default App;
