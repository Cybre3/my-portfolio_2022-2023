import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './HomeScreen';
import MainMenu from './MainMenu/MainMenu';
import Projects from './Projects/Projects';
import Technologies from './Technologies/solar_system_3D/Technologies';
import SimpleProjects from './Projects/SimpleProjects/SimpleProjects';
import IntermediateProjects from './Projects/IntermediateProjects/IntermediateProjects';
import CapstoneProjects from './Projects/CapstoneProjects/CapstoneProjects';
import Sandbox from './Sandbox';

import './App.css';
// import Core from './Technologies/solar_system_3D/Core';

function App() {
 

  return (
    <div className='App bg-black h-screen'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/main-menu" element={<MainMenu />} />
          <Route path="/projects" element={<Projects />} />
          <Route exact path="/projects/simple-projects" element={<SimpleProjects />} />
          <Route exact path="/projects/intermediate-projects" element={<IntermediateProjects />} />
          <Route exact path="/projects/capstone-projects" element={<CapstoneProjects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/resume" element={<MainMenu />} />
          <Route path="/contact-me" element={<MainMenu />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
