import { Tabs, TabList, TabPanels, Tab, TabPanel,Input,InputGroup,Button,Flex,InputAddon,InputLeftElement,
 Center} from '@chakra-ui/react'
    import {FaMapMarkerAlt} from "react-icons/fa";
import {HiSwitchHorizontal} from 'react-icons/hi'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Flights = () => {
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
        <Tabs variant='unstyled' width='97%' m='auto' padding='5px 0px 5px 0px'>
        <TabList>
          <Tab  _selected={{ color: '#3662d8', bg: '#BECDF8' }}>Return </Tab>
          <Tab  _selected={{ color: '#3662d8', bg: '#BECDF8' }}>One way</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex gap={1}>
            <InputGroup width='300px'>
          <InputLeftElement
            pointerEvents='none'
            children={<FaMapMarkerAlt color='gray.300' />}/>
            <Input type='map' placeholder='Leaving From' name='leaving_to' onChange={handleChange}/>
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
            children='Check In'/>
            <Input type='date' placeholder='Check In' name='checkin_date' onChange={handleChange}></Input>
            </InputGroup>
            <InputGroup width='245px'>
          <InputAddon
            pointerEvents='none'
            children='Returning'/>
            <Input type='date' placeholder='Check Out' name='checkout_date' onChange={handleChange}></Input>
            </InputGroup>
            </Flex>
            <Button bg='#3662d8' width='200px' color='white' marginTop='30px' onClick={handleClick}>Search</Button>
          </TabPanel>
          <TabPanel>
          <Flex gap={1}>
            <InputGroup width='300px'>
          <InputLeftElement
            pointerEvents='none'
            children={<FaMapMarkerAlt color='gray.300' />}/>
            <Input type='map' placeholder='Leaving From' name='leaving_to' onChange={handleChange} />
            </InputGroup>
            <Center><HiSwitchHorizontal /></Center>
            <InputGroup width='300px'>
          <InputLeftElement
            pointerEvents='none'
            children={<FaMapMarkerAlt color='gray.300' />}/>
            <Input type='map' placeholder='Going to' name='going_to' onChange={handleChange}/>
            </InputGroup>
            <InputGroup width='275px'>
          <InputAddon
            pointerEvents='none'
            children='Check In'/>
            <Input type='date' placeholder='Check In' name='checkin_date' onChange={handleChange}></Input>
            </InputGroup>
            </Flex>
            <Button bg='#3662d8' width='200px' color='white' marginTop='30px' onClick={handleClick}>Search</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    )
}

export default Flights