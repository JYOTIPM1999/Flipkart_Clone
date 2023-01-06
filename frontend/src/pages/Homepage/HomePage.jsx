<<<<<<< HEAD
import { Grid, GridItem, Img, Input } from "@chakra-ui/react";
import React from "react";
import HomeSlider from "./SliderComp";
=======
import { Box, Grid, GridItem, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import { SlideData, slideData2 } from './SlideData'
import { MultiSliderComp } from './SliderComp'
>>>>>>> 0329850c346eedcea6f55f130208b071671b1954

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
<<<<<<< HEAD
      {/* <HomeSlider /> */}
      <Grid
        templateAreas={`
    
    "h1 h1 h2 h2 h2 h2 h2 h2"
    "h1 h1 h2 h2 h2 h2 h2 h2"
    "h1 h1 h2 h2 h2 h2 h2 h2"
    "h1 h1 h2 h2 h2 h2 h2 h2"
    "h5 h5 h5 h5 h5 h6 h6 h6"
    "h5 h5 h5 h5 h5 h6 h6 h6"
    "h5 h5 h5 h5 h5 h6 h6 h6"
    "h7 h7 h7 h8 h8 h8 h8 h8"
    "h7 h7 h7 h8 h8 h8 h8 h8"
    "h7 h7 h7 h8 h8 h8 h8 h8"

   
   
  
  
  `}
        gridTemplateRows={"repeat(10,1fr)"}
        gridTemplateColumns="repeat(8, 1fr)"
        h="600px"
        gap="2"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem bg="orange" area={"h1"}>
          one
        </GridItem>

        <GridItem bg="blue.400" area={"h2"}></GridItem>

        <GridItem bg="yellow" area={"h5"}>
          five
        </GridItem>

        <GridItem bg="gray" area={"h6"}>
          six
        </GridItem>

        <GridItem bg="red" area={"h7"}>
          seven
        </GridItem>

        <GridItem bg="gray" area={"h8"}>
          eight
        </GridItem>
      </Grid>
=======
      <Box
      p={4}

      display="flex"
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      mb="10px"
      
      justifyContent="space-around"
      bg="white"
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

     <MultiSliderComp slides={SlideData}/>
     <MultiSliderComp slides={slideData2}/>
    
>>>>>>> 0329850c346eedcea6f55f130208b071671b1954
    </>
  );
};

export default HomePage;
