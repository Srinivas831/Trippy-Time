import React from 'react'
import { Flex,Box,chakra } from '@chakra-ui/react'
const EachCard = ({city,image,rating,trips}) => {
  return (
   <>
<Flex flexWrap={"wrap"}  
margin={"auto"} bg="white"_dark={{bg: "#3e3e3e",}}p={50}
w={{ base: "100%", md: "50%" }}

  alignItems="center"
  justifyContent="center"
>
  <Flex direction="column"  justifyContent="center" alignItems="center" w="sm"
    mx="auto" >
    <Box bg="gray.300"  h={80} w="full" rounded="lg" shadow="md" bgSize="cover"
      bgPos="center"
      style={{
        backgroundImage:
          `url(${image[0]})`,
           transition: 'transform 0.3s ease', // Transition on transform property
    hover: {
      transform: 'scale(1.1)', // Apply the zoom effect on hover
    },
      }}
    ></Box>

    <Box w={{ base: 40, md: 64, }}  bg="white"  _dark={{ bg: "gray.800", }}
      mt={-10}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <chakra.h3 py={3}  textAlign="center" fontWeight="bold" textTransform="uppercase"  color="gray.800"  _dark={{ color: "white", }}
        letterSpacing={1}  >
        {city}
      </chakra.h3>

      <Flex alignItems="center" justifyContent="space-between"  py={3} px={3}
        bg="gray.200"  _dark={{ bg: "gray.700", }} >

        <chakra.span
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "gray.200",
          }}
        >
          {trips[0].price} for ${trips[0].days} days
        </chakra.span>

        {/* for button */}

        <chakra.button
          bg="gray.800"
          fontSize="xs"
          fontWeight="bold"
          color="white"
          px={2}
          py={1}
          rounded="lg"
          textTransform="uppercase"
          _hover={{
            bg: "gray.700",
            _dark: {
              bg: "gray.600",
            },
          }}
          _focus={{
            bg: "gray.700",
            _dark: {
              bg: "gray.600",
            },
            outline: "none",
          }}
        >
          Explore
        </chakra.button>
      </Flex>
    </Box>
  </Flex>
</Flex>

   </>
  )
}

export default EachCard
