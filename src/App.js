import React from 'react';
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';
import Certificates from './components/certificates/Certificates';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    
    <>
      <Sidebar />
      <main className='main'>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Certificates />
      <Contact />
      </main>
    </>
  );
}

export default App
