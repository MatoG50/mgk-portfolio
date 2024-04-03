import { Box, Flex, HStack, Text, Link } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box color='white' p={4}>
      <Flex justifyContent='space-between'>
        <Text>Martin Githinji</Text>
        <HStack>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>Contact</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
