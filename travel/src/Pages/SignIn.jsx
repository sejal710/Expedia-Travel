import {
    Flex,Box,FormControl,FormLabel,InputGroup,InputRightElement,
    Input,Stack,Button, Heading,useColorModeValue
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

import { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContaxt } from '../Contaxt/AuthContaxt';

const SignIn = () => {
  const navigate = useNavigate()
  const {togleAuth} = useContext(AuthContaxt);
    const [data,setData] = useState({
      Email :"",
      Password:""
    });
    const [showPassword, setShowPassword] = useState(false);
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
  // console.log(info)
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
      togleAuth()
          navigate('/')
      // window.location.replace("http://localhost:3000/")
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
              {/* <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="Password" onChange={handleChange}/>
              </FormControl> */}
                <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input type={showPassword ? 'text' : 'password'} onChange={handleChange} name="Password"/>
                          <InputRightElement h={'full'}>
                            <Button
                              variant={'ghost'}
                              onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                              }>
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
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
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={()=>navigate('/create')}>
                  Create a new account
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
     )
}

export default SignIn;


