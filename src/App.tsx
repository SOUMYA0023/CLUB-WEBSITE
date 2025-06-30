import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import Achievements from './components/Achievements';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Recruitment from './pages/Recruitment';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Header />
              <Hero />
              <About />
              <Team />
              <Events />
              <Achievements />
              <JoinUs />
              <Contact />
              <Footer />
            </main>
          }
        />
        <Route path="/recruitment-form" element={<Recruitment />} />
      </Routes>
    
    </div>
  );
}

export default App;
