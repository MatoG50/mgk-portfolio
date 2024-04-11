import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Box className='main-container' paddingTop='70px'>
        <Home />
        <Projects />
        <Posts />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default App;
