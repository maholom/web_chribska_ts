import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Missing = () => <h1>Missing</h1>;

function App() {
  return (
    <div className="App">
      <Link data-testid="link-about" to="/about">
        About
      </Link>
      <Link data-testid="link-home" to="/">
        Home
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid="main-text">
          Test Review <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
