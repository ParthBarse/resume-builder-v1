import { AddIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
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
import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

const BasicDetails = (props) => {
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

  return (
    <Stack>
      <div  style={{ display: "flex" , flexDirection: 'start' }}>
      <div style={{ display: "flex" , flexDirection: 'column' }}>
        <Checkbox
          onChange={handleCheckboxChange}
          style={{ marginRight: "15px" }}
        />
        </div>
        <div>
          <span>
            I hereby declare that the above information is correct and complete
            to the best of my knowledge and belief.
          </span>
          <br />
          <span>
            Hiermit erkläre ich, dass die obigen Angaben nach meinem besten
            Wissen und Gewissen richtig und vollständig aufgelistet sind.
          </span>
        </div>
      </div>

      {/* Display alert message using Chakra UI Alert component */}
      {isChecked && (
        <Alert status="success" mt={4}>
          <AlertIcon />
          Declaration Accepted!
        </Alert>
      )}

      <FormControl>
        <FormLabel>Signature-photo</FormLabel>

        <Input
          type="file"
          onChange={handleFileChange}
          colorScheme="#00b0ff"
          w="100%"
          rightIcon={<AddIcon />}
        />
        {selectedFile && <Text mt={2}>Selected file: {selectedFile.name}</Text>}
      </FormControl>
      <br />
      <SimpleGrid columns={[1, 1, 1, 3]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>Place</FormLabel>
          <Input
            type="text"
            placeholder=""
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
          <FormLabel>Country</FormLabel>
          <Input
            type="text"
            placeholder=""
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
          <FormLabel>Date</FormLabel>
          <Input
            type="text"
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

        <FormControl style={{ display: addressSection ? "block" : "none" }}>
          <FormLabel>Address: </FormLabel>
          <Input
            type="text"
            placeholder="city, country"
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
        </FormControl>
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
          marginLeft={"4%"}
        >
          Save
        </Button>
      </Center>
    </Stack>
  );
};

export default BasicDetails;
