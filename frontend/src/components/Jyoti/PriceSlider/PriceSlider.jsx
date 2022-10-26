import {
  Box,
  Button,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

export const PriceSlider = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(5000);
  const [valueone, setValueone] = useState(25000);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <>
      {data[0]},{data[1]}
      <RangeSlider
        aria-label={["min", "max"]}
        min={0}
        step={5000}
        max={80000}
        colorScheme="blue"
        defaultValue={[value, valueone]}
        onChange={(e) => setData(e)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Box display={"flex"} gap="20px" margin={"auto"}>
        <Select onChange={(e) => handleChange(e)}>
          <option value="">Min</option>
          <option value="15000">₹15,000</option>
          <option value="25000">₹25,000</option>
          <option value="35000">₹35,000</option>
          <option value="50000">₹50,000</option>
        </Select>
        to
        <Select>
          <option value="25000">₹25,000</option>
          <option value="35000">₹35,000</option>
          <option value="50000">₹50,000</option>
          <option value="60000">₹60,000</option>
          <option value="75000">₹75,000</option>
        </Select>
      </Box>
    </>
  );
};
