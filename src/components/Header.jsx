// Header.js
import React, { Component } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isDrawerOpen: false,
      selectedOption: null,
      isHamburgerDrawerOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  handleDrawerToggle = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  openHamburgerDrawer = () => {
    this.setState({ isHamburgerDrawerOpen: true });
  };

  closeHamburgerDrawer = () => {
    this.setState({ isHamburgerDrawerOpen: false });
  };

  selectOption = (option) => {
    this.setState({ selectedOption: option, isHamburgerDrawerOpen: false });
  };

  render() {
    return (
      <Flex zIndex={10} align="center" justify="space-between" p={4} bg="#00b0ff" color="white" marginBottom={4}>

        {/* Button to toggle Drawer */}
        <Box>
          <Button variant="outline" onClick={this.handleDrawerToggle}>
            Profile
          </Button>
        </Box>

        {/* Drawer for Regular Navigation Links */}
        <Drawer placement="left" onClose={this.handleDrawerToggle} isOpen={this.state.isDrawerOpen}>
          <DrawerOverlay />
          <DrawerContent bg="#0C2340" color="white" >
            <DrawerCloseButton />
            <DrawerHeader>Profile</DrawerHeader>
            <DrawerBody>
              <Link href="#" mb={2} _hover={{ textDecoration: 'none' }} onClick={() => this.selectOption('Option 1')}>
                CV <br />
              </Link>
              <Link href="#" mb={2} _hover={{ textDecoration: 'none' }} onClick={() => this.selectOption('Option 2')}>
                Files uploaded <br />
              </Link>
              <Link href="#" mb={2} _hover={{ textDecoration: 'none' }} onClick={() => this.selectOption('Option 3')}>
                Photo <br />
              </Link>
              <Link href="#" _hover={{ textDecoration: 'none' }} onClick={() => this.selectOption('Option 4')}>
                Information<br />
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      
        {/* Navigation Links */}
        <Flex
          display={{ base: this.state.isMenuOpen ? 'flex' : 'none',position:"fixed", md: 'flex' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Link href="/" mr={4} _hover={{ textDecoration: 'none' }}>
            Home
          </Link>
    
          <Link href="/Resume" mr={4} _hover={{ textDecoration: 'none' }}>
           Edit-CV
          </Link>
          
        </Flex>
      </Flex>
    );
  }
}

export default Header;
