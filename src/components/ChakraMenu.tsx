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
  scrollToSection: scrollToSectionFn; // Use the interface here
}

const ChakraMenu: React.FC<ChakraMenuProps> = ({ scrollToSection }) => (
  <Menu>
    <MenuButton
      backgroundColor='rgb(231,58,101)'
      as={IconButton}
      aria-label='Options'
      icon={<GiHamburgerMenu />}
      variant='outline'
    />
    <MenuList>
      <MenuItem color='rgb(12,3,20)'>
        <a onClick={() => scrollToSection('home')}>Home</a>
      </MenuItem>
      <MenuItem color='rgb(12,3,20)'>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
      </MenuItem>
      <MenuItem color='rgb(12,3,20)'>
        <a onClick={() => scrollToSection('posts')}>Posts</a>
      </MenuItem>
      <MenuItem color='rgb(12,3,20)'>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default ChakraMenu;
