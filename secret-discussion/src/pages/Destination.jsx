import React from 'react'
import "../Css/Destination.css"
import axios from "axios"
import { useEffect, useState } from 'react'
import EachCard from './EachCard'
import { Flex } from '@chakra-ui/react'
const Destination = () => {
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(false);
  const[success,setSuccess]=useState([]);

  async function fetching(){
    try{
      setLoading(true);
      let res=await axios.get(`https://mock-api-cw3.onrender.com/places`);

      setSuccess(res.data);
      setLoading(false);
     
    }
    catch(err){
      setError(true);
      setLoading(false);
    }
   
  }
  if(success.length>0){

    console.log(loading);
  }

useEffect(()=>{
  // console.log(loading);

  fetching()
},[])


if(loading){
  return <h1>Loading...</h1>;
}
if(error){
  return <h1>Error...</h1>;
}

console.log(success)
  return (
    <>
   
    <div className='destination'>
    <h1><b>ExploreTop Destination</b> </h1>

     <Flex flexWrap={"wrap"}>

     {success?.length && success?.map(el=><EachCard key={el.id} {...el}/>)}
     </Flex>
    </div>
    </>
  )
}

export default Destination