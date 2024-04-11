import { Box, Flex, HStack, Text, Show, Hide } from '@chakra-ui/react';
import ChakraMenu from './ChakraMenu';

export interface scrollToSectionFn {
  (sectionId: string): void;
}

const NavBar = () => {
  const scrollToSection: scrollToSectionFn = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <ChakraMenu scrollToSection={scrollToSection} />
        </Show>
        <Hide breakpoint='(max-width: 768px)'>
          <HStack fontSize='24px' spacing={6}>
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
            <a onClick={() => scrollToSection('posts')}>Posts</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </HStack>
        </Hide>
      </Flex>
    </Box>
  );
};

export default NavBar;
