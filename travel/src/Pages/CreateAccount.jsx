import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import {  useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link as RouterLink} from 'react-router-dom'
  import { useNavigate } from 'react-router-dom';
  const CreateAccount = () => {
  const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    // const [data,setData] = useState({});
    const [text,setText] = useState({})
   const getData = (text)=> {
     fetch(`http://localhost:8080/signup`,{
        method :'POST',
        body : JSON.stringify(text),
        headers : {
          'content-type' : 'application/json'
        }
      })
      // .then((res)=>res.json())
      // .then((res)=>{
      //   if(res.token){
      //     data(res.token)}
      // })
      .catch((err)=>{console.log(err)})
    }
    const handleChange = (e) => {
        setText({...text,[e.target.name]:e.target.value})
    }
    const handleClick = (e) => {
      e.preventDefault();
      getData(text)
      if(text.FirstName !== "" && text.LastName !== "" && text.Email !== "" && text.Password !== ""){
        navigate('/signin')
      }
      else{
        alert("Please Fill Properly")
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
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                      Create Account
                    </Heading>
                  </Stack>
                  <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                      <HStack>
                        <Box>
                          <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input type="text" name="First Name" onChange={handleChange} />
                          </FormControl>
                        </Box>
                        <Box>
                          <FormControl id="lastName" >
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" onChange={handleChange} name="Last Name"/>
                          </FormControl>
                        </Box>
                      </HStack>
                      <FormControl id="email" isRequired >
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" onChange={handleChange} name="Email"/>
                      </FormControl>
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
                      <Stack spacing={10} pt={2}>
                        <Button
                          loadingText="Submitting"
                          size="lg"
                          bg={'blue.400'}
                          color={'white'}
                          _hover={{
                            bg: 'blue.500'}}
                            onClick = {handleClick}>
                          Sign up
                        </Button>
                      </Stack>
                      <Stack pt={6}>
                        <Text align={'center'}>
                          Already a user? <Link as={RouterLink} to='/signin' color={'blue.400'}>Sign in</Link>
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>
    )
}

export default CreateAccount;