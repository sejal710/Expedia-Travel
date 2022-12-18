import travel from '../travel.json'
import React from 'react';
import { Box, IconButton, useBreakpointValue,Flex,Grid,Text, Center } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import {MdPool} from 'react-icons/md'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

const PlaceA = ({going_to}) => {
 let data = travel.travel;
    return (
        <Box>
            {
               data && data.map((el) => {
                    return (
                        <Box width={"80%"} height={"320px"} padding='10px'>
                            <Flex>
                            <Box width={'33%'} height={'100%'}>
                               <Carousel img1={el.img1} img2={el.img2} img3={el.img3} img4={el.img4} /> 
                            </Box>
                            <Box >
                                <Grid gap={'5px'}>
                                    <Box><Text fontSize={'30px'} fontWeight={'bold'}>{el.hotel_name}{' '}{going_to}</Text></Box>
                                    <Box width='16%'><Text>{going_to}</Text></Box>
                                    {
                                        el.facility === "pool" ? <Box width='20%'><Text><Center><MdPool /> {el.facility} </Center></Text></Box>
                                        : <Box width='35%'><Text><Center><MdPool /> {el.facility} </Center></Text></Box> 
                                    }
                                    <Box width='400px' height={'140px'} padding='5px'>
                                        <Box height={'50px'}></Box>
                                     <Box display='flex' alignItems={'end'} justifyContent={'end'}><Box><Text fontSize={'20px'} fontWeight='bold'>₹ {el.price}</Text>
                                     <Text fontSize={'10px'}>per traveller</Text></Box></Box>
                                     <Box display='flex' justifyContent={'space-between'}>
                                          <Box><Text>{el.rate}{'/10'}{' '}{el.reviewType}{' '}{el.review}{' '}{'review'}</Text></Box>
                                          <Box><Text fontSize={'12px'}>incluede fligth + stay</Text>
                                          </Box>
                                     </Box>
                                    </Box>
                                </Grid>
                            </Box>
                            </Flex>
                       </Box>
                    )
                })
            }
          <Carousel />
        </Box>
    )
}
// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
 function Carousel({img1,img2,img3,img4}) {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState();
  
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });
  
    // These are the images used in the slide
    const cards = [img1,img2,img3,img4];
  
    return (
      <Box
        position={'relative'}
        height={'300px'}
        width={'300px'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
        //   aria-label="left-arrow"
        //   colorScheme="messenger"
        //   borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
        //   aria-label="right-arrow"
        //   colorScheme="messenger"
        //   borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={'300px'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    );
  }
  

export default PlaceA