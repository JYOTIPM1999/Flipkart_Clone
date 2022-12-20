import { Box, Grid, GridItem, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel'

const HomePage = () => {
  const img1 = [
    { to:"/tv", img:"nav4.png", str:"TVs & Appliances"  },
    { to:"/", img:"nav2.png", str:"Mobiles & Tablets"  },
    { to:"/", img:"nav3.png", str:"Electronics"  },
    { to:"/", img:"nav5.png", str:"Fashion"  },
    { to:"/", img:"nav6.png", str:"Beauty"  },
    { to:"/", img:"nav1.png", str:"Top Offers"  },
    { to:"/", img:"nav7.png", str:"Home & Furniture"  },
    { to:"/", img:"nav8.png", str:"Fligts"  },
    { to:"/", img:"nav9.png", str:"Grocery"  },
   
   
  
  ]

  return (
    <>
      <Box
      p={4}

      display="flex"
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      mb="20px"
      justifyContent="space-around"
      >
        {
          img1.map((elem,i)=>(
            <Link key={i}  border="1px solid red" to={elem.to} align="center" >
            <Img src={elem.img} h="80px" />
            <Text fontSize={14} fontWeight="500" _hover={{color:"rgb(40,116,240)"}} >{elem.str}</Text>
          </Link>
          ))}
       </Box>

     <Carousel/>
    </>
  )
}

export default HomePage