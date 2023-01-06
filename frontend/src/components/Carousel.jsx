import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Img, Text } from '@chakra-ui/react';
const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    autoplaySpeed: 2500,
      cssEase: "linear"
  };

  return (
    < >
     
     
        <Slider {...settings} >
          <Box border="1px solid black" h="auto">
            <Img src='slick1.png'h={275} />
          </Box>
          <Box border="1px solid black" h="auto">
            <Img src='slick2.png'h={275} />
          </Box>
          <Box border="1px solid black" h="auto">
            <Img src='slick3.png'h={275} />
          </Box>
          <Box border="1px solid black" h="auto">
            <Img src='slick4.png'h={275} />
          </Box>
          <Box border="1px solid black" h="auto">
            <Img src='slick5.png'h={275} />
          </Box>
          <Box border="1px solid black" h="auto">
            <Img src='slick7.png'h={275} />
          </Box>
        </Slider>
    
    </>
  )
}

export default Carousel