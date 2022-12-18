import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Input,Button,Flex,Image,Text,Select} from '@chakra-ui/react'
import '../Component/Navbar.css'

import Stays from './Stays'
import Flights from './Flights'
import Packages from './Packages';
import Cars from './Cars'
import Holidays from './Holidays'
const Home = () => {

    return (
      <Box display='grid' gap={3}>
        <Box width='90%' m='20px auto 20px auto' border='1px solid #343b53' padding={5} borderRadius='20px' >
  <Tabs >
  <TabList justifyContent='center' alignItems='center'>
  <Tab className='menu'>Stays</Tab>
    <Tab className='menu'>Flights</Tab>
    <Tab className='menu'>Cars</Tab>
    <Tab className='menu'>Packeges</Tab>
    <Tab className='menu'>Things to do</Tab>
  </TabList>

  <TabPanels>

    <TabPanel>
      <Stays />
    </TabPanel>

    <TabPanel>
     <Flights />
    </TabPanel>

    <TabPanel>
     <Cars />
    </TabPanel>
    
    <TabPanel>
     <Packages />
    </TabPanel>


    <TabPanel>
      {/* <Flex gap ={2}>
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
      <Button bg='#3662d8' width='200px' color='white' marginTop='30px'>Search</Button> */}
      <Holidays />
    </TabPanel>

  </TabPanels>
</Tabs>
      </Box>

      <Box width="95%" height='450px' bgImage="url('https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg')"
             bgRepeat="no-repeat" bgSize='100%' bgPosition='center' m='auto' borderRadius='20px' position='relative' >
              <Box position='absolute'  top="50%" transform="translate(10%, -110%)" width='35%' height='80px'>
                 <Text color='white' fontSize='35px' fontWeight='bold'>Save instantly with Expedia Rewards</Text>
                 <Text color='white' fontSize='15px' fontWeight='bold'>You can enjoy access to perks like Member Prices, saving an average of 15% on thousands of hotels. Terms may apply.</Text>
                 <Button bg='#3662d8' width='150px' color='white' marginTop='6px'>See Member Price</Button>
              </Box>
      </Box>

      <Box height='300px' width='95%' m='auto auto 10px auto' border='1px solid #343b53' borderRadius='10px'>
        <Flex width='100%' height='100%'>
        <Box  width='35%' height='100%'>
            <Image  src='https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg' width='100%' height='100%'/>
        </Box>
        <Box width='45%' height='100%' padding='5px'>
         <Box width='90%'  padding='5px 0px 5px 0px'>
          <Text fontSize='30px' fontWeight='bold'>Go further with the Expedia app</Text>
         </Box>
         <Box  padding='5px 0px 5px 0px'>
          <Text>Save even more - Get up to 20% on select hotels and earn double the
             points when you book on the app. Our app deals help you 
            to save on trips so you can travel more and managing it all on the go.</Text>
         </Box>
         <Box marginTop='10px'width='80%'>
          <Text fontWeight='bold' fontSize='20px'  padding='5px 0px 5px 0px'>Text yourself a download link for easy access</Text>
         </Box>
         <Box padding='5px 0px 5px 0px'>
          <Flex gap={2}>
          <Select placeholder='Country code' width='25%'>
               <option value='option3'>+91</option>
         </Select>
         <Input type='number' placeholder='Phone number' width='45%'/> 
         <Button bg='#3662d8' color='white'>Get The App</Button>
          </Flex>
         </Box>
         <Box  padding='5px 0px 5px 0px'>
          <Text fontSize='10px'>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>
         </Box>
        </Box>
        <Box height='100%' width='20%' display='flex' justifyContent='center' alignItems='center'>
          <Box height='40%' width='65%'>
            <Image src='https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/personaRelaunch/BEX-HP-PERSONA-DEFAULT-TEST-27.png'
             width='100%' height='80%'/>
             <Text fontSize='15px' fontWeight='bold'>Scan the QR code</Text>
          </Box>
        </Box>
        </Flex>

      </Box>
        
      </Box>
    )
}

export default Home