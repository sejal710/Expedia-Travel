import {Box,Text,Flex} from '@chakra-ui/react'
const Support = () => {
    return (
       <Box padding={'10px'}>
         <Box><Text>Trip Planning</Text></Box>
         <Box ><Flex><Box width='35%'><Text fontWeight={'bold'}>International Destinations</Text>
         </Box>
          <Box><Text>
Check out Expedia's featured travel destinations, which gives you a full selection 
of hotels to suit any budget in the most popular destinations in India and the world at large. 
Find the hotel that is right for you using our star ratings, guest reviews, location maps & great discount 
rates.</Text>
<Text marginTop={"10px"}>Singapore Hotels Hong Kong Hotels Kuala Lumpur Hotels Bangkok Hotels Pattaya 
            Hotels Paris Hotels Bali Hotels Maldives Hotels Dubai Hotels New York Hotels London Hotels Mauritius 
            Hotels Melbourne Hotels 
            Sydney Hotels Las Vegas Hotels Koh Samui Hotels Krabi Hotels</Text></Box>
            </Flex></Box>
            <Box ><Flex><Box width='35%'><Text fontWeight={'bold'}>Domestic Destinations</Text>
         </Box>
          <Box><Text>Travelling within India? Check out our most popular domestic travel destinations with great selection of hotel partners, hotel reviews and our best travel deals!</Text>
<Text marginTop={"10px"}>Goa Hotels Ooty Hotels Mahabaleshwar Hotels Manali Hotels Shimla 
Hotels Mysore Hotels Mount Abu Hotels Lonavala Hotels Chennai Hotels New Delhi Hotels Bangalore Hotels 
Kolkata Hotels Jaipur Hotels Mumbai Hotels Agra Hotels Hyderabad Hotels Udaipur Hotels Pune Hotels</Text></Box>
            </Flex></Box>
       </Box>
    )
}

export default Support;