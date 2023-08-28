
import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
 
} from '@chakra-ui/react';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Im from "../assets/images/logo2.png"
let links = [
  { text: 'Home', path: '/' },
  { text: 'Explore', path: '/explore' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
 
];

const NavLink = (props) => {
  const { children, to } = props; // Extract 'to' prop
  return (
    <Box
      as={Link} // Use the Link component
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('green.300', 'green.600'),
      }}
      to={to} // Use the 'to' prop for navigation
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flag, setFlag] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    // Simulate login process
    setFlag(false);
  };

  const handleLogout = () => {
    // Simulate logout process
    setIsLoggedIn(false);
  };
  return (
    <>
      <Box  px={4} zIndex="10" width="-webkit-fill-available" position="fixed" bg="rgb(237,242,247)"  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={240} alignItems={'center'}>
            <Box>
              <Image
                width={200}
                h={16}
                size={'sm'}
                src={Im}
                alt="Logo"
              />
            </Box>
            <HStack as={'nav'} spacing={12} display={{ base: 'none', md: 'flex' }} fontSize={18} fontWeight={500}>
              {links.map(({ text, path }) => (
                <NavLink to={path} key={path} > {/* Use 'path' as key */}
                  {text}
                </NavLink>
              ))}
            </HStack>
          </HStack>


          {flag ? (
          <Box>
             <Link to="/login"> <Button style={{backgroundColor:"grey.300",color:"white"}} > LOGIN </Button> </Link> 
             <Link to="/signup"> <Button  > SIGN UP </Button> </Link> 
          </Box>
         
        ) : (

          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                  alt="User Avatar"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>

                <Button backgroundColor="black"  _hover={{ backgroundColor: "black" }} onClick={()=>setFlag(true)}> <MenuItem bg="black" color="white">Logout</MenuItem> </Button>

              </MenuList>
            </Menu>
          </Flex>
)}
        </Flex>

                     {/* Conditional rendering for login/logout buttons */}
      {/* {isLoggedIn ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )} */}

        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map(({ text, path }) => (
                <NavLink to={path} key={path}> {/* Use 'path' as key */}
                  {text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
// import Im from "../assets/images/logo2.png"
