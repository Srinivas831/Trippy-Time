import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"
import { Image } from '@chakra-ui/react';
import SingleCard from './SingleCard';
import "../Css/SingleCard.css"

const DestinationDetail = () => {
    const{id}=useParams();
    const[loading,setLoading]=useState(false);
    const[err,setErr]=useState(false);
    const[res,setRes]=useState(null);

  async function fetchSingleData(){
    try{
    let result=await axios(`https://mock-api-cw3.onrender.com/places/${id}`);
      console.log(result);
      setRes(result.data);
      setLoading(false);
      console.log(result.data)
    }
    catch(err){
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  }

  useEffect(()=>{
    setLoading(true);
    console.log(loading)
    fetchSingleData()
  },[])

  if (loading) {
    return(
      <>
      <div style={{display:"flex", justifyContent:"center"}}>
      <Image src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' />
      </div>
      </>
    ) 
      }
  return (
   <>

    {res?(
         <SingleCard props={res} />
    ):null}
   </>
  )
}

export default DestinationDetail



