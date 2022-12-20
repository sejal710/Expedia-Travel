import { Box,Input,InputGroup,Button,Flex,InputAddon,InputLeftElement} from '@chakra-ui/react'
  import '../Component/Navbar.css'
  import {FaMapMarkerAlt} from "react-icons/fa";
const Holidays = () => {
    return (
    <Box width='97%' m='auto' padding='5px 0px 5px 0px'>
    <Flex gap ={2}>
    <InputGroup >
    <InputLeftElement
      pointerEvents='none'
      children={<FaMapMarkerAlt color='gray.300' />}/>
      <Input type='map' placeholder='Things to do in' />
      </InputGroup>
      <InputGroup width='245px'>
    <InputAddon
      pointerEvents='none'
      children='From'/>
      <Input type='date' placeholder='Check In' ></Input>
      </InputGroup>
      <InputGroup width='245px'>
    <InputAddon
      pointerEvents='none'
      children='To'/>
      <Input type='date' placeholder='Check In' ></Input>
      </InputGroup>
      </Flex>
      <Button bg='#3662d8' width='200px' color='white' marginTop='30px'>Search</Button>
        </Box>
    )
}

export default Holidays