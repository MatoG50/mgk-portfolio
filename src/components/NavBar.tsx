import { Box, Flex, HStack, Text, Link, Show, Hide } from '@chakra-ui/react';
import ChakraMenu from './ChakraMenu';

const NavBar = () => {
  return (
    <Box color='white' p={4}>
      <Flex
        justifyContent='space-between'
        flexWrap='wrap'
        gap='20px'
        paddingRight='20px'
        paddingLeft='20px'
      >
        <Text fontSize='28px'>Martin</Text>
        <Show breakpoint='(max-width: 768px)'>
          <ChakraMenu />
        </Show>
        <Hide breakpoint='(max-width: 768px)'>
          <HStack fontSize='24px' spacing={6}>
            <Link>Home</Link>
            <Link>Projects</Link>
            <Link>Posts</Link>
            <Link>Contact</Link>
          </HStack>
        </Hide>
      </Flex>
    </Box>
  );
};

export default NavBar;
