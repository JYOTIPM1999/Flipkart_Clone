import { Grid, GridItem, Img, Input } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <>
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
  h='600px'
  gap='2'
  color='blackAlpha.700'
  fontWeight='bold'
>
<GridItem  bg='orange' area={'h1'}>
  one
  </GridItem>

  <GridItem  bg='blue.400' area={'h2'}>
  
  </GridItem>

 

  <GridItem  bg='yellow' area={'h5'}>
  five
  </GridItem>

  <GridItem  bg='gray' area={'h6'}>
  six
  </GridItem> 


  <GridItem  bg='red' area={'h7'}>
  seven
  </GridItem>

  <GridItem  bg='gray' area={'h8'}>
  eight
  </GridItem> 



  

 
</Grid>
    </>
  )
}

export default HomePage