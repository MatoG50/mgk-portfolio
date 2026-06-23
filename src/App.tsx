import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Box className="main-container" paddingTop="60px">
        {/* Ambient background glows for SaaS aesthetic */}
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
        <div className="grid-overlay"></div>
        
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default App;
