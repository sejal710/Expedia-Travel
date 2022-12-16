import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
  } from '@chakra-ui/react';
  import logo1 from '../logo1.png'

const Footer = () => {
     return (
        <Box >
            <Box width="95%" height='350px' bgImage="url('https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg')"
             bgRepeat="no-repeat" bgSize='100%' bgPosition='center' m='auto' borderRadius='20px' position='relative' >
                <Box position='absolute' bottom='1' left='2'>
                 <Box width='180px'>   
                <Text color='white' fontWeight='bold'>Plain Ahead and save</Text></Box>
                <Box>
                <Text color='white'>Book 60 days in advance for 20% off select stays</Text></Box>
                </Box>
            </Box>
            <Box padding={2}>
                <Text>Explore a world of Travel with Expedia</Text>
                <Text color='#3662d8'>Discover new Place and Experience</Text>
            </Box>
            <LargeWithLogoCentered />
      </Box>
     )
}



  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  function LargeWithLogoCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'} color='#3662d8'>About us</Link>
              <Link href={'#'} color='#3662d8'>Jobs</Link>
              <Link href={'#'} color='#3662d8'>List your property</Link>
              <Link href={'#'} color='#3662d8'>Patnership</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Explore</ListHeader>
              <Link href={'#'} color='#3662d8'>India travel guide</Link>
              <Link href={'#'} color='#3662d8'>Hotels in India</Link>
              <Link href={'#'} color='#3662d8'>Holiday rentals in India</Link>
              <Link href={'#'} color='#3662d8'>Holiday packages in India</Link>
              <Link href={'#'} color='#3662d8'>Domestic flights</Link>
              <Link href={'#'} color='#3662d8'>Car hire in India</Link>
              <Link href={'#'} color='#3662d8'>All accommodation types</Link>
              <Link href={'#'} color='#3662d8'>Travel blog</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Policies</ListHeader>
              <Link href={'#'} color='#3662d8'>Privacy Statement</Link>
              <Link href={'#'} color='#3662d8'>Terms of use</Link>
              <Link href={'#'} color='#3662d8'>Verbo terms and conditions</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Help</ListHeader>
              <Link href={'#'} color='#3662d8'>Support</Link>
              <Link href={'#'} color='#3662d8'>Change or cancel your booking</Link>
              <Link href={'#'} color='#3662d8'>Refund Process and timelines</Link>
              <Link href={'#'} color='#3662d8'>Book a flight using an airline credit</Link>
              <Link href={'#'} color='#3662d8'>International travel and documents</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
                <img src={logo1} alt="" width='150px'/>
          </Flex>
          
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.
          </Text>
        </Box>
      </Box>
    );
  }



  export default Footer;