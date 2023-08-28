import "../Css/Home.css"
// Import Swiper styles
import React, { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Css/styles.css';
import { Pagination } from 'swiper/modules';
import axios from "axios"
import { Image,Button } from "@chakra-ui/react";


import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcTodoList } from 'react-icons/fc';


import { Carousel } from 'antd';

const contentStyle = {
  height: '350px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
  margin:"auto",
  marginTop:"50px",
  marginBottom:"50px",
  w:['100%', '80%', '80%'] 
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
        mx="auto"
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};


const Home = () => {
  const[data,setData]=useState([]);
  async function fetching(){
    let res=await axios(`https://mock-api-cw3.onrender.com/cities`);
    console.log(res.data)
    setData(res.data);
  }
  useEffect(()=>{
  fetching();
  },[])
  return (
    <>
    <div className='homeBg'>
      {/* <Navbar /> */}
      {/* <div style={{width:"40%",color:"black"}}>
      <h1>Go where you feel most alive</h1>
     <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, tempore id. Aperiam suscipit tenetur cum beatae, placeat, asperiores </h2>
      </div> */}
        </div>

        <div style={{display:"flex", justifyContent:"center", padding:"40px 20px 20px 20px"}}>
          <h2 style={{fontSize:"30px", fontWeight:"600"}}>Why Choose Us</h2>
        </div>
      <Box p={10} textAlign={"center"} marginBottom={"20px"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} padding={"20px"}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10}  />}
          title={'24/7 Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Top offers '}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcTodoList} w={10} h={10} />}
          title={'Quality Gurantee'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>


    
    <div style={{ width:"55%", margin:"auto",  textAlign:"center",padding:"20px"}}>
      <h1 style={{fontSize:"30px", fontWeight:"600", marginBottom:"10px"}}>Explore Top Destinations In India</h1>
      <p>Travel is the best way to discover new places, meet people and share your experiences.</p>
      <br/>
    </div>
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper">
          
          {data?.length && data.map((ele)=>{
            return <>
            <SwiperSlide key={Math.random()} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Image src={ele.images[3]} style={{height:"300px"}} />
      <h2 style={{fontSize:"20px", fontWeight:"600", textTransform:"uppercase", paddingTop:"7px"}}>{ele.city}</h2>
      <div style={{display:"flex", justifyContent:"space-around",width: "-webkit-fill-available",padding:"10px"}}>
      <span>{ele.time_to_travel}</span> 
      <span>₹ {ele.travel_cost}</span>
      </div>
      <Button style={{marginBottom:"35px", padding:"10px", color:"white", backgroundColor:"black"}}><b>Explore</b></Button>
            </SwiperSlide>
            </>   
      })}
      </Swiper>
    </>


    <Carousel autoplay>
      {data?.length && data.map((ele)=>{
    return <div>
      <Image key={Math.random()} style={contentStyle} src={ele.images[0]} />
    </div>
      })}
   
  </Carousel>
    </>
  )
}

export default Home