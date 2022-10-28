import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";

export const AccordionSort = (sort) => {
  // console.log(sort);
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight={"600"} fontSize="12px">
            {sort.name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Checkbox>{sort.samsung}</Checkbox>
        </AccordionPanel>
        <AccordionPanel pb={4}>
          <Checkbox>{sort.Realme}</Checkbox>
        </AccordionPanel>
        <AccordionPanel pb={4}>
          <Checkbox>{sort.MI}</Checkbox>
        </AccordionPanel>
        <AccordionPanel pb={4}>
          <Checkbox>{sort.LG}</Checkbox>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
