import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu/MainMenu';
import Projects from './Projects/Projects';
import Technologies from './Technologies/Technologies';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path="/about-me" element={<MainMenu />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/resume" element={<MainMenu />} />
          <Route path="/contact-me" element={<MainMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
