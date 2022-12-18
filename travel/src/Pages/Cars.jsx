import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Input,InputGroup,Button,Flex,InputAddon,Image,InputLeftElement,
    Text,Grid, Center,Select} from '@chakra-ui/react'
    import {FaMapMarkerAlt} from "react-icons/fa";
import {HiSwitchHorizontal} from 'react-icons/hi'
import {HiBuildingOffice2} from 'react-icons/hi2'

const Cars = () => {

    return (
        <Tabs variant='unstyled' width='97%' m='auto' padding='5px 0px 5px 0px'>
        <TabList>
          <Tab  _selected={{ color: '#3662d8', bg: '#BECDF8' }}>Car hire </Tab>
          <Tab  _selected={{ color: '#3662d8', bg: '#BECDF8' }}>Airport transport</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid gap={2}>
            <Flex gap={2}>
            <InputGroup >
          <InputLeftElement
            pointerEvents='none'
            children={<FaMapMarkerAlt color='gray.300' />}/>
            <Input type='map' placeholder='Pick up' />
            </InputGroup>
            <InputGroup >
          <InputLeftElement
            pointerEvents='none'
            children={<FaMapMarkerAlt color='gray.300' />}/>
            <Input type='map' placeholder='Same as pick up' />
            </InputGroup>
            </Flex>
            <Flex gap={2}>
            <InputGroup width='245px'>
          <InputAddon
            pointerEvents='none'
            children='Pick-up'/>
            <Input type='date' placeholder='Check In' ></Input>
            </InputGroup>
            <InputGroup width='245px'>
          <InputAddon
            pointerEvents='none'
            children='Drop-off'/>
            <Input type='date' placeholder='Check In' ></Input>
            </InputGroup>
      
            <InputGroup width='245px'>
          <InputAddon
            pointerEvents='none'
            children='Pick-up'/>
            <Input type='time' placeholder='Check In' ></Input>
            </InputGroup>
      
            <InputGroup width='245px'>
          <InputAddon
            pointerEvents='none'
            children='Drop-off'/>
            <Input type='time' placeholder='Check In' ></Input>
            </InputGroup>
            </Flex>
            </Grid>
            <Button bg='#3662d8' width='200px' color='white' marginTop='30px'>Search</Button>
          </TabPanel>
          <TabPanel>
          <Flex gap={1}>
            <InputGroup width='300px'>
          <InputLeftElement
            pointerEvents='none'
            children={<FaMapMarkerAlt color='gray.300' />}/>
            <Input type='map' placeholder='Leaving From' />
            </InputGroup>
            <Center><HiSwitchHorizontal /></Center>
            <InputGroup width='300px'>
          <InputLeftElement
            pointerEvents='none'
            children={<HiBuildingOffice2 color='gray.300' />}/>
            <Input type='text' placeholder='Hotel Name' />
            </InputGroup>
            <InputGroup width='245px'>
          <InputAddon
            pointerEvents='none'
            children='Flight-arrival'/>
            <Input type='date' placeholder='Flight-arrival' ></Input>
            </InputGroup>
      
            <InputGroup width='245px'>
          <InputAddon
            pointerEvents='none'
            children='Flight-arrival'/>
            <Input type='time' placeholder='Flight-arrival' ></Input>
            </InputGroup>
            </Flex>
            <Button bg='#3662d8' width='200px' color='white' marginTop='30px'>Search</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    )
}

export default Cars