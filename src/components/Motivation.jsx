import { AddIcon, ChevronRightIcon,ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  
  FormLabel,
  Input,
  Alert,
  Checkbox,
  AlertIcon,
  
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import {  Text } from '@chakra-ui/react';

const Motivation = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [addressSection] = React.useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const paragraphStyle = {
    color: 'red',
  };

  return (
    <Stack>

<FormControl>




        <Input
            type="text"
            placeholder="Your Name"
            value={resumeInfo.profile.firstname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                firstname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        
        <Input
            type="text"
            placeholder="Postal Address,PIN CODE, CITY"
            value={resumeInfo.profile.address}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                address: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />


<Input
              type="tel"
              placeholder="phone number"
              maxLength={10}
              pattern="[0-9]{10}"
              value={resumeInfo.profile.phone}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  phone: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />

<Input
            type="email"
            placeholder="Your email address"
            value={resumeInfo.profile.email}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                email: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
    <br/>
    <br/>
    <br/>

    <Input
            type="text"
            placeholder="Name of the Adresse "
            value={resumeInfo.profile.address}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                address: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />


<Input
              type="text"
              placeholder="Postal Address"
              maxLength={10}
              pattern="[0-9]{10}"
              value={resumeInfo.profile.phone}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  phone: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />

<Input
            type="text"
            placeholder="PIN CODE, CITY"
            value={resumeInfo.profile.email}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                email: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
    <br/>
    <br/>
    <br/>

<SimpleGrid columns={[1, 1, 1, 4]} spacing={4}  textAlign="Right">
          
          <Input
            type="text"
            placeholder="Place"
            value={resumeInfo.profile.fisrstname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                firsstname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />


        <FormControl>
          <Input
            type="Date"
            placeholder="DD-MM-YYYY"
            value={resumeInfo.profile.lastname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                lastname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>

</SimpleGrid>
<br/>
<br/>



 <p style={paragraphStyle}>Please write this letter by addressing the following questions:<br/>
1. What training would you like to complete in Germany?<br/>
2. Why do you want to complete your training in Germany?<br/>
3. What are your plans after completing your training?<br/>
4. How, where and how long have you been learning German?<br/></p>

<textarea id="description" placeholder="Type your Letter here" name="description" rows="8" cols="90" border="1px" ></textarea>
<br/>
<br/>
<br/>

<br/>


    <p>Best Regards</p>

</FormControl>


<FormControl>
        
          <Input
            type="text"
            placeholder="Your Name"
            value={resumeInfo.profile.fisrstname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                firsstname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>



    
    
        
     
        <FormControl>
          <FormLabel>Signature-photo</FormLabel>
        
          <Input
          type="file"
          onChange={handleFileChange}
          colorScheme="#00b0ff"
          w="100%"
          rightIcon={<AddIcon />}
        />
        {selectedFile && (
          <Text mt={2}>Selected file: {selectedFile.name}</Text>
        )}



        </FormControl><br/>
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={4} placeItems="center">

        
      </SimpleGrid>
     

      


      <Center mt={8}>
      <Button
          colorScheme="blue"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          leftIcon={<ChevronLeftIcon />}
        >
          back
        </Button>

        <Button
          color="#00b0ff"
          onClick={() => {
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
          marginLeft={'4%'}
        >
          Save & Submit
        </Button>
      </Center>
    </Stack>
  );
};

export default Motivation;