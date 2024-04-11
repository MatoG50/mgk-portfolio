import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const ChakraMenu = () => (
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
        <a href='#home'>Home</a>
      </MenuItem>
      <MenuItem color='rgb(12,3,20)'>
        <a href='#projects'>Projects</a>
      </MenuItem>
      <MenuItem color='rgb(12,3,20)'>
        <a href='#posts'>Posts</a>
      </MenuItem>
      <MenuItem color='rgb(12,3,20)'>
        <a href='#contact'>Contact</a>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default ChakraMenu;
