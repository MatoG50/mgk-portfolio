import { Container } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Container maxW='100%' backgroundColor='rgb(15,4,30)'>
        <NavBar />
        <Home />
      </Container>
    </>
  );
}

export default App;
