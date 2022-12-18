import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Projects from './Projects/Projects';
import './App.css';
import Technologies from './Technologies/Technologies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/about-me" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/resume" element={<MainPage />} />
          <Route path="/contact-me" element={<MainPage />} />
          <Route path="/interests" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
