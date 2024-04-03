import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Box className='main-container' w='100vw' h='100vh'>
        <NavBar />
        <Home />
      </Box>
    </>
  );
}

export default App;
