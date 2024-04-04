import { Box, Flex, HStack, Text, Link } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box color='white' p={4}>
      <Flex justifyContent='space-between' flexWrap='wrap' gap='20px'>
        <Text fontSize='28px'>Martin</Text>
        <HStack fontSize='24px' spacing={6}>
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>Posts</Link>
          <Link>Contact</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
