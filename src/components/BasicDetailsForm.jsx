import { AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  Textarea, 
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Stack,
  Radio,
  Box,
  RadioGroup,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const BasicDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [addressSection, setAddressSection] = React.useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const printSelectedOption = (option) => {
    alert(` ${option}`);
    const updateValue = {
      lang: ` ${option}`,
    };
    const updateResumeInfo = { ...resumeInfo, profile: updateValue };
    setResumeInfo(updateResumeInfo);
  };
  const [hobbies, setHobbies] = useState([""]);

  const [hobbie, setHobbie] = useState([""]);

  const handleInputChange1 = (index, value) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = value;
    setHobbies(updatedHobbies);
  };
  const handleInputChange2 = (index, value) => {
    const updatedHobbie = [...hobbie];
    updatedHobbie[index] = value;
    setHobbie(updatedHobbie);
  };
  const handleAddInput1 = () => {
    setHobbies([...hobbies, ""]);
  };

  const handleAddInput2 = () => {
    setHobbie([...hobbie, ""]);
  };

  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");
  const [printedData, setPrintedData] = useState("");

  const paragraphStyle = {
    color: "red",
  };

  const [blocks, setBlocks] = useState([]);

  const addBlock = () => {
    const newBlock = { id: blocks.length + 1 };
    setBlocks([...blocks, newBlock]);
  };

  const deleteBlock = (id) => {
    const updatedBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(updatedBlocks);
  };

  const [blocks2, setBlocks2] = useState([]);

  const addBlock2 = () => {
    const newBlock = { id: blocks2.length + 1 };
    setBlocks2([...blocks2, newBlock]);
  };

  const deleteBlock2 = (id) => {
    const updatedBlocks = blocks2.filter((block) => block.id !== id);
    setBlocks2(updatedBlocks);
  };



  const [inputs, setInputs] = useState(['']);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };


  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handlePrintInputs = () => {
    alert(inputs.join(', ')); // You can modify this to suit your needs
  };









  
  return (
    <Stack>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>Choose one Language to fill up the form* </FormLabel>
          <Box p={4}>
            <RadioGroup onChange={handleOptionChange} value={selectedOption}>
              <Stack direction="row" spacing={4}>
                <Radio value="English">English</Radio>
                <Radio value="German">German</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </FormControl>
        <br />

        <FormControl>
          <FormLabel>Surname/ Nachname*</FormLabel>
          <Input
            type="text"
            placeholder="Your last name"
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

        <FormControl>
          <FormLabel>Given Name(s) / Vorname*</FormLabel>
          <Input
            type="text"
            placeholder="Your first name"
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
        </FormControl>

        <FormControl>
          <FormLabel>Father's Name / Vater Name*</FormLabel>
          <Input
            type="text"
            placeholder="Your father name"
            value={resumeInfo.profile.father}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                father: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <br />
      </SimpleGrid>
      <p style={paragraphStyle}>
        Your full name must match that of your (future) passport and must be
        spelled in full. Abbreviated names will not be accepted. All documents,
        i.e. CV, certificates and relevant documents, must match. Your name(s)
        should be the same everywhere, otherwise your VISA and recognition
        procedure in Germany will be rejected due to errors by the official
        German authorities. In the worst case, you will risk not being allowed
        to enter Germany.
      </p>
      <br />

      <FormControl>
  <FormLabel>Address/ Adresse*: </FormLabel>
  <Textarea
    placeholder=""
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


      <FormControl>
        <FormLabel>Country/Länder*: </FormLabel>
        <Input
          type="text"
          placeholder=" country"
          value={resumeInfo.profile.country}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.profile,
              country: e.target.value,
            };
            const updateResumeInfo = { ...resumeInfo, profile: updateValue };
            setResumeInfo(updateResumeInfo);
          }}
        />
      </FormControl>

      <p style={paragraphStyle}>
        3 lines (like in passport) / 3 Zeilen (wie im Reisepass) Instructions to
        the Candidate: You must enter the exact address as it is (or will be) in
        your passport. This is usually three lines for the address. The same
        address will be used by the German employer to prepare your offer letter
        and your employment contract. Note: The German authorities will also
        check your CV for the VISA application and other applications, e. g. for
        recognition. They will reject applications where the information in the
        documents does not match. Any later correction will lead to high costs.
      </p>
      <br />

      <br />
      <FormControl>
  <FormLabel>Contact Number/Kontaknummer*:</FormLabel>

  <InputGroup>
    <InputLeftAddon children="" color="blue.600" />
    <Select
      value={resumeInfo.profile.Country_code}
      onChange={(e) => {
        const updateValue = {
          ...resumeInfo.profile,
          Country_code: e.target.value,
        };
        const updateResumeInfo = {
          ...resumeInfo,
          profile: updateValue,
        };
        setResumeInfo(updateResumeInfo);
      }}
    >
      {[...Array(100).keys()].slice(1).map((number) => (
        <option key={number} value={number < 10 ? `+${number}` : `+${number}`}>
          {number < 10 ? `+${number}` : `+${number}`}
        </option>
      ))}
    </Select>
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
  </InputGroup>
</FormControl>

      <p style={paragraphStyle}>
        Instructions to the Candidate: Contact No. of Candidate is required in
        this field. Candidates are not allowed to write their Parents or
        relatives contact number here. Your Contact Number should be same
        everywhere i.e. CV and all other relevant documents. All communication
        for employment and migration process will be done to this contact number
        only.
      </p>
      <br />

      <FormControl>
        <FormLabel>Email address / E-Mail-Adresse*:</FormLabel>
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
        <FormHelperText>
          Enter email address to get contacted for jobs
        </FormHelperText>
      </FormControl>

      <p style={paragraphStyle}>
        Keep only one email address for all your documents. Your email Address
        should be same everywhere i.e. CV and all other relevant documents. All
        communication will be done to this email address only.
      </p>
      <br />

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>Birthdate/Geburtsdatum*</FormLabel>
          <Input
  type="date"
  
 
  onChange={(e) => {
    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

    if (!isNaN(selectedDate.getTime())) {
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const year = selectedDate.getFullYear();

      const formattedDate = `${day}-${month}-${year}`;

      const updateValue = {
        ...resumeInfo.profile,
        birth: formattedDate,
      };

      const updateResumeInfo = { ...resumeInfo, profile: updateValue };
      setResumeInfo(updateResumeInfo);
    }
  }}
/> 
        </FormControl>

        <FormControl>
          <FormLabel>Place of Birth / Geburtsort*:</FormLabel>
          <Input
            type="text"
            placeholder="Place of Birth / Geburtsort:"
            value={resumeInfo.profile.pob}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                pob: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Passport Number / Reisepassnummer*:</FormLabel>
          <Input
            type="text"
            placeholder="Passport Number / Reisepassnummer:"
            value={resumeInfo.profile.pass}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                pass: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          <FormControl>
            <FormLabel>Upload passport photo*</FormLabel>

            <Input
              type="file"
              // onChange={handleFileChange}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.files,
                  passport: e.target.files[0],
                };
                const updateResumeInfo = { ...resumeInfo, files: updateValue };
                setResumeInfo(updateResumeInfo);
              }}
              colorScheme="#00b0ff"
              w="8rem"
              rightIcon={<AddIcon />}
            />
            {selectedFile && (
              <Text mt={2}>Selected file: {selectedFile.name}</Text>
            )}
            <Button color="#00b0ff">View</Button>
            <Button color="#00b0ff">Delete</Button>
          </FormControl>
        </FormControl>
        <br />


        <FormControl>
          <FormLabel>Marital Status/ Familienstand*:</FormLabel>
          <Select
            placeholder="Select an option"
            value={resumeInfo.profile.mari}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                mari: `${e.target.value}`,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          >
            <option value="Married">Married</option>
            <option value="Single ">Single </option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Gender/Geschlecht(wie im reisepass)*</FormLabel>
          <Select
            placeholder="Select an option"
            value={resumeInfo.profile.Gender}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                Gender: `${e.target.value}`,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgendeer">Transgender</option>
          </Select>
        </FormControl>

        {/* <FormControl>
          <FormLabel>Computer skills / Computerkenntnisse:</FormLabel> 
          <Input
            type="text"
            placeholder="Computer skills / Computerkenntnisse:"
            value={resumeInfo.profile.CS}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                CS: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          /> 
          
        </FormControl>*/}
        {/* <FormControl>
          <FormLabel style={{ display: addressSection ? "block" : "none" }}>Hobbies / Hobbies:</FormLabel> 
          <Input
            type="text"
            placeholder="Hobbies / Hobbies:"
            value={resumeInfo.profile.hobbi}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                hobbi: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          
        </FormControl>
      */}
      </SimpleGrid>
      <p style={paragraphStyle}>
        Instructions to the Candidate: Attention! Enter your birthdate, place of
        birth, Marital Status, Gender & Passport Number correctly. It will be
        checked in migration and employment process by the authorities.
      </p>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>Hobbies / Hobbies*</FormLabel>
          <Input placeholder="Hobby 1"
            value={resumeInfo.profile.hobbi}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                hobbi: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          
          
          
          marginBottom={2} />

{blocks.map((value, index) => (
  <Input
    placeholder={`Hobby ${value.id+1}`}
    key={index}
    type="text"
    value={resumeInfo?.profile?.hobbi1?.[index] || ''}
    onChange={(e) => {
      const newHobbies = [...(resumeInfo?.profile?.hobbi1 || [])];
      newHobbies[index] = e.target.value;

      const updatedProfile = {
        ...resumeInfo?.profile,
        hobbi1: newHobbies,
      };

      const updatedResumeInfo = {
        ...resumeInfo,
        profile: updatedProfile,
      };

      setResumeInfo(updatedResumeInfo);
    }}
    marginBottom={2}
  />
))}

          
          <Button marginRight={2} color="#00b0ff" onClick={addBlock}>
            Add
          </Button>
         
          <Button
            color="red"
            onClick={() => {
              const lastBlock = blocks[blocks.length - 1];
              if (lastBlock) {
                deleteBlock(lastBlock.id);
                
             
                  
                 
                const newHobbies = [...(resumeInfo?.profile?.hobbi1)];
                newHobbies.pop();

                const updatedProfile = {
                  ...resumeInfo?.profile,
                  hobbi1: newHobbies,
                };
          
                const updatedResumeInfo = {
                  ...resumeInfo,
                  profile: updatedProfile,
                };
          
                setResumeInfo(updatedResumeInfo);

            }}}
          >
            Delete
          </Button>
        </FormControl>
        <br/>
        <FormControl>
          <FormLabel>Computer skills /Computerkenntnisse*</FormLabel>
          <Input placeholder="Computer skills 1" 
           value={resumeInfo.profile.ComputerSkills}
          onChange={(e)=>{
            const updateValue = {
              ...resumeInfo.profile,
              ComputerSkills: e.target.value,
            };
            const updateResumeInfo = { ...resumeInfo, profile: updateValue };
            setResumeInfo(updateResumeInfo);

          }}
          
          marginBottom={2} />

  {blocks2.map((value, index) => (
  <Input
    placeholder={`ComputerSkills ${value.id+1}`}
    key={index}
    type="text"
    value={resumeInfo?.profile?. ComputerSkills1?.[index] || ''}
    onChange={(e) => {
      const ComputerSkills1 = [...(resumeInfo?.profile?. ComputerSkills1 || [])];
      ComputerSkills1[index] = e.target.value;

      const updatedProfile = {
        ...resumeInfo?.profile,
        ComputerSkills1: ComputerSkills1,
      };

      const updatedResumeInfo = {
        ...resumeInfo,
        profile: updatedProfile,
      };

      setResumeInfo(updatedResumeInfo);
    }}
    marginBottom={2}
  />
))}


          <Button marginRight={2} color="#00b0ff" onClick={addBlock2}>
            Add
          </Button>
          <Button
            color="red"
            onClick={() => {
              const lastBlock = blocks2[blocks2.length - 1];
              if (lastBlock) {
                deleteBlock2(lastBlock.id);   }
                
            }}
          >
            Delete
          </Button>
        </FormControl>

        <br/>

        <FormControl>
          <FormLabel>Candidate image/foto des kandidaten*</FormLabel>

          <Input
            type="file"
            // onChange={handleFileChange}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.files,
                candidate: e.target.files[0],
              };
              const updateResumeInfo = { ...resumeInfo, files: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
            colorScheme="#00b0ff"
            w="8rem"
            rightIcon={<AddIcon />}
          />
         

    
          <Button color="#00b0ff">View</Button>
          <Button color="#00b0ff">Delete</Button>
        </FormControl>
      </SimpleGrid>
      <p style={paragraphStyle}>
            Instructions to the Candidate: Image must be a Passport Photo and
            should be the same everywhere. High resolution image required.
          </p>


      <Center mt={8}>
        <Button
          color="#00b0ff"
          onClick={() => {
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </Center>
    </Stack>
  );
};

export default BasicDetails;
