import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> 
  );
}

function Home() {
  return (
    <h1>This is my home page</h1>
  )
}

function About() {
  return (
    <h1>About page goes here!</h1>
  )
}

export default App;
