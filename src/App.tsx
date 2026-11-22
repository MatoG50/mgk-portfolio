import { Box } from '@chakra-ui/react';
import { MotionConfig } from 'framer-motion';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Box className="main-container">
        <div className="studio-backdrop" aria-hidden="true" />
        <NavBar />
        <Box as="main" position="relative" zIndex="1">
          <Home />
          <Projects />
          <About />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </MotionConfig>
  );
}

export default App;
