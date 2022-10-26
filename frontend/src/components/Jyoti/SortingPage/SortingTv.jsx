import React from "react";
import RangeSlider from "../Slider/Slider";
import { Box, Stack, Typography } from "@mui/material";

function SortingTv() {
  return (
    <Box border="1px solid red" p="2" width="100%" bg="white">
      <Stack>
        <Box>
          <Typography fontSize="1rem">Filter</Typography>
          {/* <RangeSlider /> */}
        </Box>
        <Box>
          <Typography fontSize="1rem">Category</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">PRICE</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">BRAND</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">SCREEN SIZE</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">IDEAL FOR VIEWING DISTANCE</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">RESOLUTION</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">SCREEN TYPE</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">SMART TV</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">OPERATING SYSTEM</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">CONNECTIVITY FEATURE</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">CUSTOMER RATINGS</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">OFFERS</Typography>
        </Box>
        <Box>
          <Typography fontSize="1rem">THEME</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default SortingTv;
