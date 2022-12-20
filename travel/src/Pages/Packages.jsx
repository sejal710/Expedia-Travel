import { Box,Input,InputGroup,Button,Flex,InputAddon,InputLeftElement,Center} from '@chakra-ui/react'
  import '../Component/Navbar.css'
  import {FaMapMarkerAlt} from "react-icons/fa";
  import {HiSwitchHorizontal} from 'react-icons/hi'
  import { useState } from 'react';
   import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate = useNavigate()
  const [place,setPlace] = useState({});
 const handleChange = (e) => {

    setPlace({...place,[e.target.name] : e.target.value})
 }
 const handleClick = (e) => {
   e.preventDefault();
   
   setTimeout(()=>{
     return (
     navigate('/place',{state:place})
     )
   },3000)
    
 }
    return (
         <Box width='97%' m='auto' padding='5px 0px 5px 0px'>
             <Flex gap={1}>
      <InputGroup width='300px'>
    <InputLeftElement
      pointerEvents='none'
      children={<FaMapMarkerAlt color='gray.300' />}/>
      <Input type='map' placeholder='Leaving From' name='leaving_from' onChange={handleChange} />
      </InputGroup>
      <Center><HiSwitchHorizontal /></Center>
      <InputGroup width='300px'>
    <InputLeftElement
      pointerEvents='none'
      children={<FaMapMarkerAlt color='gray.300' />}/>
      <Input type='map' placeholder='Going to' name='going_to' onChange={handleChange}/>
      </InputGroup>
      <InputGroup width='245px'>
    <InputAddon
      pointerEvents='none'
      children='Departing'/>
      <Input type='date' placeholder='Check In' name='date' onChange={handleChange}></Input>
      </InputGroup>
      <InputGroup width='245px'>
    <InputAddon
      pointerEvents='none'
      children='Returning'/>
      <Input type='date' placeholder='Check In' name='returning' onChange={handleChange}></Input>
      </InputGroup>
      </Flex>
      <Button bg='#3662d8' width='200px' color='white' marginTop='30px' onClick={handleClick}>Search</Button>
         </Box>
    )
}
export default Packages;