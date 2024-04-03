import { Box, Text, Image, Heading } from '@chakra-ui/react';
import image from '../assets/mgk.jpg';

const Home = () => {
  return (
    <>
      <Box h='100%'>
        <Heading color='rgb(231,58,101)'>Software Developer</Heading>
        <Text color='white'>
          Hi, I'm Martin Githinji, a passionate software developer from Nairobi,
          Kenya.
        </Text>
        <Image src={image} alt='image' height='100px' width='100px' />
      </Box>
    </>
  );
};

export default Home;
