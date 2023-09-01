import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { Flex,HStack, Button, Image } from '@chakra-ui/react';
import EachCard from './EachCard';
import "../Css/Destination.css"
// import { useParams } from 'react-router-dom';


const Destination = () => {
  // const {id}=useParams()
  const [page, setPage] = useState(1);
  const[limit,setLimit]=useState(6);
  const[search,setSearch]=useState("")
  const [totalPages, setTotalPages] = useState(1); 
  const [searchTimeout, setSearchTimeout] = useState(null);
  const initialState = {
    loading: false,
    error: false,
    data: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return {
          ...state,
          loading: true,
        };
      case 'success':
        return {
          ...state,
          loading: false,
          error: false,
          data: action.payload,
        };
      case 'error':
        return initialState;
      default:
        throw Error('Error occurred');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let url = `https://mock-api-cw3.onrender.com/places`;

    async function fetching() {
      try {
        dispatch({
          type: 'loading',
        });

        let res = await axios.get(url, {
          params: {
            _page: page,
            _limit:limit,
            q:search
          },
        });
        
        const filteredData = res.data.filter((item) =>
        item.city.toLowerCase().includes(search.toLowerCase())
      );
        
        console.log(res.data);
        dispatch({
          type: 'success',
          payload: filteredData,
        });
      }
       catch (err) {
        dispatch({
          type: 'error',
        });
      }
    }
     // Clear the previous timeout
     if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Set a new timeout to trigger the API request after a delay (e.g., 500ms)
    const newSearchTimeout = setTimeout(() => {
      fetching();
    }, 500);

    setSearchTimeout(newSearchTimeout);

    // Clean up the timeout when the component unmounts
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
      
  }, [page,limit,search]); // Add 'page' as a dependency

  if (state.loading) {
return(
  <>
  <div style={{display:"flex", justifyContent:"center"}}>
  <Image src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' />
  </div>
  </>
) 
  }

  function changePage(no) {
    setPage(no);
  }


  return (
    <>
      <div className='destination'>

      <div className='dest'>
        
    <h1><b>Explore Top Destinations</b></h1>
 
    {/* <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tempora quo placeat numquam eos magnam? Aut culpa eos eius ullam?</h4> */}
    <br />
    <input className='inp' onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder='Search Your Dream Destiny' style={{border:"2px solid slategrey", borderRadius:"5px", width:"24vw", height:"6vh", textAlign:"center", fontWeight:"500"}} />
    </div>
        <Flex flexWrap='wrap'>
          {state.data.map((el) => (
            <EachCard key={el.id} {...el} />
          ))}
        </Flex>
            <div className="button">
      <HStack>
        {new Array(5).fill(0).map((ele, ind) => (
          <Button  onClick={()=>{changePage(ind+1)}} key={ind}>
            {ind+1}
          </Button>
        ))}
      </HStack>
      </div>
        </div>
    </>
  );
};

export default Destination;
