import React from 'react'
import "../Css/SingleCard.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Center
  } from '@chakra-ui/react';

  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  import { EffectCoverflow, Pagination } from 'swiper/modules';

import { Box, Text, Radio, RadioGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SingleCard = ({props}) => {
  
    return (
        <>
    <div className='single'>
         <Container maxW={'6xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
           "Travel. Your money will return. Your time won't"
          </Text>
          <Heading textTransform={'uppercase'} >{props.city}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
           {props.description}
          </Text>
         
         <h2 style={{fontSize:"20px", color:"rgb(131,128,150)"}}>⭐: {props.rating}</h2>
         <ul style={{color:"rgb(131,128,150)"}}>
          <Text style={{margin:"10px 10px 10px 0", color:"black", fontWeight:"bold", fontSize:"20px"}}>ATTRACTIONS</Text> 
      {props.top_spots.map((e)=>
        <li style={{marginLeft:"15px",lineHeight:"2",fontSize:"17px"}}>{e}</li>
    )}
      </ul>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              props.image[0]
            }
            objectFit={'cover'}
          />
        </Flex>
    
      </SimpleGrid>  
    </Container>
    </div>

            <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {props.image.map((ele)=>
        <SwiperSlide>
          <img src={ele} />
        </SwiperSlide>
        )}
    
      </Swiper>
    </>

    <div className='bottom'>

          <Box fontSize={30} mt={20} mb={10}>
            <RadioGroup>
              <Radio value='option1'fontSize={20}>{`${props.trips[0].price} for ${props.trips[0].days} days`}</Radio>
              <Radio value='option2'>{`${props.trips[1].price} for ${props.trips[1].days} days`}</Radio>
              <Radio value='option3'>{`${props.trips[2].price} for ${props.trips[2].days} days`}</Radio>
            </RadioGroup>
          </Box>

          <Center mt={6}>
            <Link to="/payment">
            <Button 
              colorScheme='blue'
              size='lg'
              fontSize='md'
              fontWeight='bold'
              hover={{ bg: 'blue.500' }} >
              BOOK NOW
            </Button>
            </Link>
          </Center>
        {/* </Box> */}
      </div>
    </>
  )
}

export default SingleCard