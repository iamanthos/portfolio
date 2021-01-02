import React from 'react';
import './App.css';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Project from './Component/Project/Project';
import Service from './Component/Services/Service';
import { projectData1, projectData2, projectData3, projectData4, projectData5, projectData6 } from './data'

function App() {
  return (
    <div className="app">
      <Hero />
      <Service />
      {/* <Project projectData = { projectData1 }/>
      <Project projectData = { projectData2 }/>
      <Project projectData = { projectData3 }/> */}
      <Project projectData = { projectData4 }/>
      <Project projectData = { projectData5 }/>
      <Project projectData = { projectData6 }/>
      
      <Footer />
      {/* <About /> */}
    </div>
  );
}

export default App;