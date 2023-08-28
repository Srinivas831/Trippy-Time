import React, { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Flex,
  ChakraProvider,
  Alert,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';
import bg1 from '../assets/images/login.jpg';

const Loginpage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [countdown, setCountdown] = useState(3); // Number of seconds for countdown

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (credentials.email === 's@gmail.com' && credentials.password === '12') {
      console.log('Login successful');
      setShowSuccessAlert(true);

      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // Update countdown every second

      setTimeout(() => {
        setShowSuccessAlert(false);
        clearInterval(timer); // Clear the countdown interval
        // Redirect or perform any other action
        window.location.href = '/';
      }, countdown * 1000); // Redirect after countdown seconds
    } else {
      setLoginError('Invalid email or password.');
    }
  };

  useEffect(() => {
    if (showSuccessAlert && countdown === 0) {
      // Redirect once the countdown reaches 0
      window.location.href = '/';
    }
  }, [showSuccessAlert, countdown]);

  return (
    <ChakraProvider>
      <div
        style={{
          height: '100vh',
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg1})`,
          backgroundSize: 'cover',
          backgroundRepeat:'initial',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
         
        }}
      >
        <form onSubmit={handleLogin}>
          <Flex direction="column" alignItems="center">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              marginBottom="10px"
              value={credentials.email}
              onChange={handleChange}
              style={{ width: '500px', color: 'white' }}
            />
            <Input
              name="password"
              type="password"
              marginBottom="10px"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              style={{ width: '500px', color: 'white' }}
            />
            <Button type="submit" colorScheme="teal">
              LOGIN
            </Button>
            {loginError && (
              <Alert status="error" bg="red.600" mt={4}>
                <AlertIcon color="red.400" />
                {loginError}
                <CloseButton position="absolute" right="8px" top="8px" onClick={() => setLoginError('')} />
              </Alert>
            )}
            {showSuccessAlert && (
              <Alert status="success" bg="green.600" mt={4}>
                <AlertIcon color="green.400" />
                Login successful! Redirecting in {countdown} seconds...
              </Alert>
            )}
          </Flex>
        </form>
      </div>
    </ChakraProvider>
  );
};

export default Loginpage;