import {
  Box,
  Checkbox,
  Divider,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AccordionSort } from "./AccordionSort";
import { PriceSlider } from "./PriceSlider";

function SortingTv() {
  return (
    <Box border="1px" borderColor={"gray.300"} p="2" width="100%" bg="white">
      <Stack>
        <Box>
          <Text fontSize="1rem">Filter</Text>
        </Box>
        <Box>
          <Text fontSize="1rem">Category</Text>
        </Box>
        <Divider />
        <Box>
          <Text fontSize="1rem">PRICE</Text>
          <PriceSlider />
        </Box>
        <Box display={"flex"}>
          <Checkbox ml={"1rem"}>
            <Image
              w={"80px"}
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            />
          </Checkbox>
          <Icon ml={"40%"} />
        </Box>
        <Box>
          <AccordionSort
            name={"BRAND"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"SCREEN SIZE"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"IDEAL FOR VIEWING DISTANCE"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"RESOLUTION"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"SCREEN TYPE"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"OPERATING SYSTEM"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"CONNECTIVITY FEATURES"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"NO OF USB PORTS"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"CUSTOMER RATINGS"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"OFFERS"}
            samsung={"10% off"}
            LG={"20% off"}
            MI={"30% off"}
            Realme={"50% off"}
          />
        </Box>
        <Box>
          <AccordionSort
            name={"THEME"}
            samsung={"samsung"}
            LG={"LG"}
            MI={"MI"}
            Realme={"Real me"}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default SortingTv;
