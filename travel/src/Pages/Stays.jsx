import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box,Input,InputGroup,Button,Flex,InputAddon,Checkbox,InputLeftElement,MenuButton,Menu,MenuList,
    MenuItem,Text,Grid, Center} from '@chakra-ui/react'
import {FaMapMarkerAlt} from "react-icons/fa";
import {GrAddCircle ,GrSubtractCircle} from "react-icons/gr";
const initalState = {
    car:"",
    fligth : "",
    going_to:"",
    checkin_date:"",
    checkout_date:""
   }
const Stays = () => {
    const navigate = useNavigate()
    const [place,setPlace] = useState(initalState);
    const [add,setAdd] = useState(1);
    const [age,setAge] = useState(1);
   const handleChange = (e) => {
     const k = e.target.name === "car" || e.target.name === "fligth" ? e.target.checked : e.target.value;
      setPlace({...place,[e.target.name] : k})
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
          <Box gap={3} display='grid'>
        <Flex gap={3}>
      <InputGroup width='300px'>
    <InputLeftElement
      pointerEvents='none'
      children={<FaMapMarkerAlt color='gray.300' />}/>
      <Input type='map' placeholder='Going to' onChange={handleChange} name='going_to'/>
      </InputGroup>

      <InputGroup width='245px'>
    <InputAddon
      pointerEvents='none'
      children='check In'/>
      <Input type='date' placeholder='Check In' onChange={handleChange} name='checkin_date'></Input>
      </InputGroup>

      <InputGroup width='245px'>
    <InputAddon
      pointerEvents='none'
      children='check out'/>
      <Input type='date' placeholder='Check out' onChange={handleChange} name='checkout_date' ></Input>
      </InputGroup>

  <Menu >
  <MenuButton as={Button} leftIcon={<FaMapMarkerAlt/>} width='250px'>    
    <Grid width='140px'>
      <Box>
      <Text size='5px'>Traveller</Text></Box>
      <Box><Text >1room, 2traveller</Text></Box>
    </Grid>
  </MenuButton>
      <MenuList>
        <MenuItem gap={2} ><Text fontWeight='bold' size='15px'>Travellers</Text></MenuItem>
        <MenuItem gap={2}><Text size='5px'>Room1</Text></MenuItem>
        <MenuItem gap={2} display='flex' justifyContent='space-between'>
            <Box>Adults</Box>
            <Box display='flex'>
             <Text><Center gap={2}> <GrAddCircle size='20px' onClick={()=>{if(add === 5)setAdd(add)
             else setAdd(add+1)}}/> {add} <GrSubtractCircle size='20px' onClick={()=>{if(add===1)setAdd(add)
            else setAdd(add-1)}} /> </Center></Text> 
            </Box>
        </MenuItem>
        <MenuItem gap={2} display='flex' justifyContent='space-between'>
            <Box>
              <Box>Children</Box>
              <Box><Text fontSize='14px'>Ages 0 to 17</Text></Box>
            </Box>
            <Box display='flex'>
             <Text><Center gap={2}> <GrAddCircle size='20px' onClick={()=>{
              if(age===16)setAge(age)  
              else setAge(age+1)
             }}/>  {age} <GrSubtractCircle size='20px' onClick={()=>{
              if(age===1)setAge(age)  
              else setAge(age-1)
             }}/> </Center></Text> 
            </Box>
        </MenuItem>
       </MenuList>
     </Menu>
       </Flex>
       <Box width='250px' display='flex' gap={3}>
 <Checkbox onChange={handleChange} name='fligth'>Add a Flight</Checkbox>
 <Checkbox  onChange={handleChange} name='car'>Add a Car</Checkbox></Box>
      </Box>
      <Button bg='#3662d8' width='200px' color='white' onClick={handleClick}>Search</Button>
      </Box>
    )
}

export default Stays