// RegistrationPage.js
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Select
} from '@chakra-ui/react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    termsAccepted: false,
    favoriteFood: '', // Keep the favoriteFood field
  });

  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Simulate registration process (send data to backend, receive confirmation, etc.)
    console.log('Simulating registration process:', formData);

    // Set registrationComplete to true for demo purposes
    setRegistrationComplete(true);
  };

  return (
    <Flex align="center" justify="center" h="100vh" marginBottom={4}>
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="#00b0ff">
        <Heading mb={4} textAlign="center" color="white">
          Registration
        </Heading>
        {registrationComplete ? (
          <Box color="white" textAlign="center">
            Registration completed! Check your email for confirmation.
          </Box>
        ) : (
          <form onSubmit={handleRegistration}>
            <FormControl mb={4} isRequired>
            <FormControl mb={4} isRequired>
              <FormLabel color="white">First name*</FormLabel>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel color="white">last name*</FormLabel>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel color="white">Mobile Number*</FormLabel>
              <Input
                type="tel"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            
              <FormLabel color="white">Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            
            <FormControl mb={4} isRequired>
              <FormLabel color="white">Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            <FormControl mb={4} isRequired>
           
            <Select color="black"
                bg="white" placeholder="Select an option">
                    <option value="	What is the name of your first school?	">	What is the name of your first school?	</option>
                    <option value="What is favourite colour?">What is favourite colour?</option>
                    <option value="What is the name of your favourite book?		">What is the name of your favourite book?		</option>
                  </Select> 
                 <br/>
              <Input
                type="text"
                name=""
                placeholder='answer'
                value={formData.favoriteFood}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            <Stack spacing={4}>
              <Checkbox
                colorScheme="white"
                isChecked={formData.termsAccepted}
                onChange={handleInputChange}
                name="termsAccepted"
              >
                I accept the terms and conditions
              </Checkbox>
              <Button type="submit" colorScheme="blackAlpha" width="100%" isDisabled={!formData.termsAccepted}>
                Register
              </Button>
            </Stack>
          </form>
        )}
      </Box>
    </Flex>
  );
};

export default RegistrationPage;
