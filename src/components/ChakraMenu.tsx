import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { scrollToSectionFn } from './NavBar';

interface ChakraMenuProps {
  scrollToSection: scrollToSectionFn;
}

const ChakraMenu: React.FC<ChakraMenuProps> = ({ scrollToSection }) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<GiHamburgerMenu />}
      variant='outline'
      borderColor='rgba(255, 255, 255, 0.15)'
      color='white'
      bg='rgba(255, 255, 255, 0.03)'
      _hover={{ bg: 'rgba(255, 255, 255, 0.08)', borderColor: 'var(--primary-accent)' }}
      _active={{ bg: 'rgba(255, 255, 255, 0.12)' }}
      borderRadius='10px'
    />
    <MenuList
      bg='rgba(10, 10, 15, 0.95)'
      borderColor='rgba(255, 255, 255, 0.08)'
      backdropFilter='blur(10px)'
      borderRadius='12px'
      padding='6px'
    >
      <MenuItem
        bg='transparent'
        color='white'
        borderRadius='8px'
        _hover={{ bg: 'rgba(255, 255, 255, 0.05)', color: 'var(--primary-accent)' }}
        onClick={() => scrollToSection('home')}
      >
        Home
      </MenuItem>
      <MenuItem
        bg='transparent'
        color='white'
        borderRadius='8px'
        _hover={{ bg: 'rgba(255, 255, 255, 0.05)', color: 'var(--primary-accent)' }}
        onClick={() => scrollToSection('about')}
      >
        About
      </MenuItem>
      <MenuItem
        bg='transparent'
        color='white'
        borderRadius='8px'
        _hover={{ bg: 'rgba(255, 255, 255, 0.05)', color: 'var(--primary-accent)' }}
        onClick={() => scrollToSection('projects')}
      >
        Projects
      </MenuItem>
      <MenuItem
        bg='transparent'
        color='white'
        borderRadius='8px'
        _hover={{ bg: 'rgba(255, 255, 255, 0.05)', color: 'var(--primary-accent)' }}
        onClick={() => scrollToSection('contact')}
      >
        Contact
      </MenuItem>
    </MenuList>
  </Menu>
);

export default ChakraMenu;
