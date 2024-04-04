import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Box className='main-container'>
        <NavBar />
        <Home />
        <Projects />
      </Box>
    </>
  );
}

export default App;
