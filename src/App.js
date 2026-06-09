import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#111118',
            color: '#fff',
            border: '1px solid rgba(108, 99, 255, 0.3)',
          },
        }}
      />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div className="app" key="app">
            <CustomCursor cursorVariant={cursorVariant} />
            <ParticleBackground />
            <ScrollProgress />
            <Navbar setCursorVariant={setCursorVariant} />
            <main>
              <Hero setCursorVariant={setCursorVariant} />
              <About />
              <Skills />
              <Projects setCursorVariant={setCursorVariant} />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;