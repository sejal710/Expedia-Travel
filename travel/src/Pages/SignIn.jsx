import {
    Flex,Box,FormControl,FormLabel,
    Input,Stack,Button, Heading,useColorModeValue
  } from '@chakra-ui/react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Home from './Home';
const SignIn = () => {
  const navigate = useNavigate()
    const [data,setData] = useState({
      Email :"",
      Password:""
    });
    const [info,setInfo] = useState([])
    useEffect(()=>{
      axios.get(` http://localhost:8080/signup`)
      .then((res) => setInfo(res.data))
      .catch((err)=>console.log(err))
    },[])
  const handleChange = (e) => {
    const {name,value} = e.target; 
     setData({...data,[name]:value})
  }
  let count = 0;
  info.map((el,i)=>{
    if(el.Email === data.Email && el.Password === data.Password){
      count ++;
    }
    return count;
  })
  const handleClick = (e) => {
    e.preventDefault()
     if(count === 1){
      // window.location.replace("http://localhost:3000/")
      navigate('/')
     }
     else {
      alert ("Wrong Information")
     }
  }
     return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="Email" onChange={handleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="Password" onChange={handleChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleClick} >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
     )
}

export default SignIn;


