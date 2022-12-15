 
import {Image,Menu,MenuButton,MenuItem,MenuList,Flex,Box,Spacer,Stack,Center,Text,Divider,Link,useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,
  ModalCloseButton,Select,FormControl,FormLabel,Popover,PopoverTrigger,PopoverContent,PopoverArrow,Button,PopoverCloseButton,PopoverBody, Grid,GridItem}
   from '@chakra-ui/react';
import logo1 from '../logo1.png';
import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {HiBuildingOffice2} from "react-icons/hi2";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import {BiPackage} from "react-icons/bi";
import {MdOutlineLocalActivity} from "react-icons/md";
import {TfiWorld} from "react-icons/tfi";
import {IoMdNotifications} from "react-icons/io";
import './Navbar.css'
import {Link as RouterLink} from 'react-router-dom'
 const menu = () => {
 
    return (
      <Menu >
  <MenuButton>
   <Text className='menu'><Center gap={2}>More Travel <ChevronDownIcon /></Center></Text>
  </MenuButton>
  <MenuList>
    <MenuItem gap={2} ><HiBuildingOffice2/>Stays</MenuItem>
    <MenuItem gap={2}><MdAirplanemodeActive/>Flights</MenuItem>
    <MenuItem gap={2}><FaCarSide/>Cars</MenuItem>
    <MenuItem gap={2}><BiPackage/>Packeges</MenuItem>
    <MenuItem gap={2}><MdOutlineLocalActivity/>Holiday Activities</MenuItem>
    <MenuItem>Deals</MenuItem>
    <MenuItem>Group and mettings</MenuItem>
    <MenuItem>Mobile</MenuItem>
  </MenuList>
</Menu>
    )
 }
 const country = ['India','America','Europe','British','Bhutan','Pakisthan','China','America','South Africa','Africa','Korea','Australia','New Zeland',
'Balgium','Bangladesh','Brazile','Chile','Colmbia','Denmark','Egypt','France','Germany','Grcee','Ice Land'
]
 const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <div style={{width:"95%",display:"inline",margin:"auto"}}>
<Flex  padding="2px" height="80px">
   <Box height="100%" width="30%" gap={4} display="flex">
   <Link as={RouterLink} to='/'><Image src={logo1} alt='logo' width='150px' height='70px' /></Link>
    {menu()}
    </Box> 
    <Spacer />
    <Stack direction='row' padding="0px 30px 0px 0px" >
    <Center gap={7}>
     <Text onClick={onOpen} className='menu'><Center gap={2}><TfiWorld /> English</Center></Text>
     <Link as={RouterLink} to='/support'><Text className='menu'>Support</Text></Link>
     <Link as={RouterLink} to='/trips'><Text className='menu'>Trips</Text></Link>
     <Link as={RouterLink} to='/notification'><Text className='menu'><Center fontSize={20}><IoMdNotifications/></Center></Text></Link>

     <Popover>
  <PopoverTrigger>
   <Text className='menu'>Sign in</Text>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody >
      <Box >
     <Center><Image src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg" alt="not available" /></Center>
     <Text fontSize='2xl'>Save an average of 15% on thousands of hotels when you're signed in</Text>
     <Link as={RouterLink} to='/signin'><Button padding='2px 70px 2px 70px' bg='#3662d8' color='white' fontWeight='bold'>Sign in</Button></Link>
     <Link as={RouterLink} to='/create'><Center><Text size={10}>Create a free account</Text></Center></Link>
     <Grid templateColumns='repeat(1,1fr)' gap={1} marginTop={5}>
     <GridItem w='100%' h='10'>List of Favouirate</GridItem>
     <Divider orientation='horizontal'/>
     <GridItem w='100%' h='10'>Expedia Reward</GridItem>
     </Grid>
     <Divider orientation='horizontal'/>
     
     <Text>Feedback</Text>
     </Box>
    </PopoverBody>
  </PopoverContent>
</Popover>
  </Center>
</Stack>

    </Flex>

    <Divider orientation='horizontal'/>
    <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Display Setting</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
  <FormLabel>Country</FormLabel>
  <Select placeholder='Select country'>
   {
    country.map((el,i)=>{
        return (
            <option key={i}>{el}</option>
        )
    })
   }
  </Select>
</FormControl>
<FormControl>
  <FormLabel>Language</FormLabel>
  <Select placeholder='language'>
    <option>English</option>
  </Select>
</FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
    </div>
    
  )
 }


 export default Navbar;