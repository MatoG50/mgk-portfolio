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
      <MenuItem color='rgb(12,3,20)'>Home</MenuItem>
      <MenuItem color='rgb(12,3,20)'>Projects</MenuItem>
      <MenuItem color='rgb(12,3,20)'>Posts</MenuItem>
      <MenuItem color='rgb(12,3,20)'>Contact</MenuItem>
    </MenuList>
  </Menu>
);

export default ChakraMenu;
