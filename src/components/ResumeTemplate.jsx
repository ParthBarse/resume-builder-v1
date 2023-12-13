import { PhoneIcon } from "@chakra-ui/icons";
import {
  Text,
  Center,
  Heading,
  HStack,
  Stack,
  Link,
  VStack,
  UnorderedList,
  ListItem,
  StackDivider,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ReactToPrint from "react-to-print";

const ResumeTemplate = (props) => {
  const { resumeInfo, page } = props;

  const ref = React.useRef(null);

  return (
    <Box
      p={8}
      borderRadius="3g"
      bg="white"
      color="gray.900"
      boxShadow="xl"
      rounded="md"
      border="2px solid #e2e8f0"
      width="100%"
      height="100%"
    >
      <Stack spacing={4} ref={ref} m={6} fontFamily="sans-serif">
        <Stack spacing={1}>
          <Center>
            <Heading as="h1">
              {resumeInfo.profile?.firstname} {resumeInfo.profile?.lastname}
            </Heading>
          </Center>
          <Center>
            <HStack
              justify="center"
              wrap="wrap"
              divider={<StackDivider borderColor="gray.500" />}
            >
              {resumeInfo.profile?.email.length ? (
                <Link
                  href={resumeInfo.profile.email}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  {resumeInfo.profile.email}{" "}
                </Link>
              ) : null}

              {resumeInfo.profile?.website.length ? (
                <Link
                  href={resumeInfo.profile.website}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  Portfolio{" "}
                </Link>
              ) : null}
            </HStack>
          </Center>
          <HStack justify="center">
            <address>
              <PhoneIcon /> {resumeInfo.profile?.Country_code}  {resumeInfo.profile?.phone} &nbsp;
              {resumeInfo.profile?.address}
            </address>
          </HStack>
        </Stack>

        <VStack spacing={2} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
            PERSONAL DATA/ PERSÖNLICHE ANGABEN
          </Heading>

          <Text>Language: {resumeInfo.profile?.lang}</Text>
          <Text>Father's Name / Vater Name*:  {resumeInfo.profile?.father}</Text>
          <Text>Birthdate / Geburtsdatum: {resumeInfo.profile?.birth}</Text>
          <Text>Place of Birth / Geburtsort:  {resumeInfo.profile?.pob} </Text>
          <Text>Passport Number / Reisepassnummer: {resumeInfo.profile?.pass} </Text>
          <Text>Marital Status/ Familienstand: {resumeInfo.profile?.mari}</Text>
          <Text>Computer skills / Computerkenntnisse:{resumeInfo.profile?.ComputerSkills},
          {resumeInfo?.profile?.ComputerSkills1?.map((CS, index) => (
    <React.Fragment key={index}>
      {index > 0 && ","} 
      {CS}
    </React.Fragment>
  ))}
          </Text>
          <Text>Hobbies / Hobbies: {resumeInfo.profile?.hobbi},
             
  {resumeInfo?.profile?.hobbi1?.map((hobby, index) => (
    <React.Fragment key={index}>
      {index > 0 && ","} 
      {hobby}
    </React.Fragment>
  ))}
             
             </Text>

          <Text>Address:  {resumeInfo.profile?.address}</Text>
          <Text>country:  {resumeInfo.profile?.country}</Text>
          <Text>Marital Status/ Familienstand: {resumeInfo.profile?.mari}</Text>
          <Text>Gender/Geschlecht(wie im reisepass): {resumeInfo.profile?.Gender}</Text>
        </VStack>

        <VStack spacing={2} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="2px">
            EDUCATIONAL QUALIFICATION / SCHULISCHE QUALIFIKATION
          </Heading>
          <Heading as="h3" fontSize="m" >
          Post Graduation/Masters
          </Heading>
          
          <Text>program:{resumeInfo.edu.grad}</Text>
          <Text>Year:{resumeInfo.edu.yea1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From: {resumeInfo.edu?.from1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to1}<br/>
               Year:{resumeInfo.edu.Year1Array[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From: {resumeInfo.edu?.from1Array[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to1Array[0]}<br/>
               Year:{resumeInfo.edu.Year1Array[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From: {resumeInfo.edu?.from1Array[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to1Array[1]}<br/>
          </Text>
          <Text>University:{resumeInfo.edu.University}</Text>
        
          <Heading as="h3" fontSize="m" >
          Under Graduate Degree/Diploma
          </Heading>
            
          <Text>program:{resumeInfo.edu.Ugrad}</Text>
          <Text>Year:{resumeInfo.edu.yea2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From: {resumeInfo.edu?.from2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to2}<br/>
          Year:{resumeInfo.edu.Year2Array[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From: {resumeInfo.edu?.from2Array[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to2Array[0]}<br/>
               Year:{resumeInfo.edu.Year2Array[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From: {resumeInfo.edu?.from2Array[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to2Array[1]}<br/>
          </Text>
          <Text>University:{resumeInfo.edu.University1}</Text>

          <Heading as="h3" fontSize="m" >
          12th
          </Heading>
          <Text> From: {resumeInfo.edu?.from3}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to3}<br/></Text>

          <Text>University:{resumeInfo.edu.University2}</Text>
          <Heading as="h3" fontSize="m" >
          11th
          </Heading>
          <Text> From: {resumeInfo.edu?.from4}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to4}<br/></Text>

          <Text>University:{resumeInfo.edu.University3}</Text>

          <Heading as="h3" fontSize="m" >
          10th
          </Heading>
          <Text> From: {resumeInfo.edu?.from5}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to5}<br/></Text>

          <Text>University:{resumeInfo.edu.University4}</Text>

          <Heading as="h3" fontSize="m" >
          1st to 9th
          </Heading>
          <Text> From: {resumeInfo.edu?.from6}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to6}<br/></Text>

          <Text>University:{resumeInfo.edu.University5}</Text>
          <Heading as="h3" fontSize="m" >
         Break year(ifany)
          </Heading>
          <Text> From: {resumeInfo.edu?.from7}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to7}<br/></Text>

          <Text>Reason for break:{resumeInfo.edu.Reason}</Text>

          <Heading as="h3" fontSize="m" >
          Language Proficiency / Sprachkenntnisse:
          </Heading>
          <Text>Mother tongue/ Muttersprache:{resumeInfo.edu.motherT}</Text>
          <Text>English/ Englisch: {resumeInfo.edu.english}</Text>


          <Heading as="h3" fontSize="m" >
         German / Deutsch*
          </Heading>
          <Text>Level:{resumeInfo.edu.Level}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  from: {resumeInfo.edu.from9}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  to: {resumeInfo.edu.to9}</Text>
          <Text> Certificate (Level / date)/ Zertifikat (Stufe/Datum): {resumeInfo.edu.Certificate}</Text>


        </VStack>

      
          <VStack spacing={4} align="stretch">
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              WORK EXPERIENCE
            </Heading>
            
          <Heading as="h3" fontSize="m" >
          Employer
          </Heading>
            <Text>From: {resumeInfo.work.from}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  to: {resumeInfo.work.to}</Text>
            <Text>"Employer Name / Address Name/Adresse des Arbeitgebers": {resumeInfo.work.EmpName}</Text>
            <Text>"Department / Position Abteilung / Position": {resumeInfo.work.Dept}</Text>

            
          <Heading as="h3" fontSize="m" >
          Internship
          </Heading>
          <Text>{resumeInfo.work.from2}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {resumeInfo.work.to2}</Text>
            <Text> {resumeInfo.work.Hosp}</Text>
            <Text> {resumeInfo.work.Dept2}</Text>
            <Heading as="h3" fontSize="m" >
         Duty1
          </Heading>
          <Text> {resumeInfo.work.Duty}</Text>
            <Text> {resumeInfo.work.Dura}</Text>
          </VStack>
        

        <HStack divider={<StackDivider />} pt="24px">
          <Button
            w="max-content"
            colorScheme="messenger"
            isDisabled={page !== 5}
            onClick={() => {
              window.location.reload();
            }}
          >
            Create New
          </Button>
          <div>
            <ReactToPrint
              trigger={() => (
                <Button
                  colorScheme="messenger"
                  w="max-content"
                  isDisabled={page !== 5}
                >
                  View
                </Button>
              )}
              content={() => ref.current}
            />
          </div>
        </HStack>
      </Stack>
    </Box>
  );
};

export default ResumeTemplate;
