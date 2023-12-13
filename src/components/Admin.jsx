import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';
import axios from 'axios';



const Admin = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Smith' },
    { id: 5, name: 'Eve Davis' },
    { id: 6, name: 'Even Danel' },
    { id: 7, name: 'Ete Davis' },
  ]);


useEffect(()=>{
  const getAllResumes = async() => {
    const res = await axios({
      method : "get",
      url : "http://20.197.17.85:5000/getAllResumes",
    })
    if(res.data.success === true){
      setStudents(res.data.resumes)
      console.log(res.data.resumes);
    }
  }

  getAllResumes()
}, [])
 
  return (
    <ChakraProvider >
    
        {students.length>0 && <Box textAlign="center" p="8" marginBottom={'4%'} overflowX={"scroll"}>
          <Heading mb="4">Registered Students</Heading>
          <Table variant="simple" >
            <Thead>
              <Tr bg="#00b0ff" >
                <Th color="White">Surname</Th>
                <Th color="White">Givenname</Th>
                <Th color="White">Father's Name</Th>
                <Th color="White">Mobile-no</Th>
                <Th color="White">Email-id</Th>
                <Th color="White">Passport Photo</Th>
                <Th color="White">Candidate Photo</Th>
                <Th color="White">View More</Th>
                <Th color="White">CV</Th>
                <Th color="White">Academic Year/Semester</Th>
                <Th color="White">Post graduate Marksheet</Th>
                <Th color="White">Undergraduate/ Diploma Marksheet</Th>
                <Th color="White">12th Marksheet</Th>
                <Th color="White">11th Marksheet</Th>
                <Th color="White">10th Marksheet</Th>
                <Th color="White">Approve</Th>
                <Th color="White">Disapprove</Th>
                <Th color="White">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student, i) => (
                <Tr key={student.id}>
                  <Td bg="white" color="black">
                    {student.sur_name}
                  </Td>
                  <Td bg="white" color="black">
                  {student.given_name} 
                  </Td>
                  <Td>
                    {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                      {student.father_name}
                    {/* </Link> */}
                  </Td>
                  <Td>
                  {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                      {student.contact_number}
                    {/* </Link> */}

                  </Td>
                  <Td>
                      {student.email}
                  </Td>
                  <Td>
                  {/* <img src="http://20.197.17.85:5000/public/657301450afd17735c0f117e/passport.png" alt="student" /> */}
                  </Td>
                  <Td>
                  {/* <img src="http://20.197.17.85:5000/public/657301450afd17735c0f117e/passport.png" alt="student" /> */}
                  </Td>
                  <Td>
                      <button >View More</button>
                  </Td>
                  <Td >
                      <button >Download Full CV</button>
                      <button >Download Filtered CV</button>
                  </Td>
                  <Td >
                      <p className='min-w-max'>Year 1/ semester 1</p>
                      <p className='min-w-max'>Year 2/ semester 2</p>
                      <p className='min-w-max'>Year 3/ semester 3</p>
                  </Td>
                  <Td >
                      {student.post_graduate !== undefined && student.post_graduate.length > 0 && student.post_graduate.map((ele, index)=>{
                          console.log("post", ele);
                        return <a href={`http://20.197.17.85:5000/public/657301450afd17735c0f117e/post_graduation_marksheet_${index+1}.pdf`} target="_blank" rel="noopener noreferrer" color="#00b0ff">
                          View and Download
                        </a>
                      })}
                  </Td>
                  <Td>
                      {student.under_graduate !== undefined && student.under_graduate.length > 0 && student.under_graduate.map((ele, index)=>{
                        console.log("under", ele);
                        return <a href={`http://20.197.17.85:5000/public/657301450afd17735c0f117e/under_graduation_marksheet_${index+1}.pdf`} target="_blank" rel="noopener noreferrer" color="#00b0ff">
                          View and Download
                        </a>
                      })}
                  </Td>
                  <Td>
                   <a href={`http://20.197.17.85:5000/public/657301450afd17735c0f117e/twelweth_marksheet.pdf`} target="_blank" rel="noopener noreferrer" color="#00b0ff">
                          View and Download
                        </a>
                  </Td>
                  <Td>
                  <a href={`http://20.197.17.85:5000/public/657301450afd17735c0f117e/tenth_marksheet.pdf`} target="_blank" rel="noopener noreferrer" color="#00b0ff">
                          View and Download
                        </a>
                  </Td>
                  <Td>
                  <a href={`http://20.197.17.85:5000/public/657301450afd17735c0f117e/eleventh_marksheet.pdf`} target="_blank" rel="noopener noreferrer" color="#00b0ff">
                          View and Download
                        </a>
                  </Td>
                  <Td>
                        <button className='p-2 bg-green-700 rounded-md text-white'>Approve</button>
                  </Td>
                  <Td>
                        <button className='p-2 bg-yellow-600 rounded-md text-white'>Disapprove</button>
                  </Td>
                  <Td>
                        <button className='p-2 bg-red-700 rounded-md text-white'>Delete</button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>}
    
    </ChakraProvider>
  );
};

export default Admin;
