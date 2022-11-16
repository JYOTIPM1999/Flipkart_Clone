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
  const [value, setValue] = useState(10000);
  const [valueone, setValueone] = useState(25000);
  const handleChangeMin = (e) => {
    setValue(e.target.value);
  };
  const handleChangeMax = (e) => {
    setValueone(e.target.value);
  };
  console.log("value", value, "valueone", valueone);
  console.log("one", data[0], "two", data[1]);
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
        <Select onChange={(e) => handleChangeMin(e)}>
          <option value="">Min</option>
          <option value="10000">₹10,000</option>
          <option value="15000">₹15,000</option>
          <option value="20000">₹20,000</option>
          <option value="25000">₹25,000</option>
          <option value="30000">₹30,000</option>
        </Select>
        to
        <Select onChange={(e) => handleChangeMax(e)}>
          <option value="20000">₹20,000</option>
          <option value="25000">₹25,000</option>
          <option value="30000">₹30,000</option>
          <option value="35000">₹35,000</option>
          <option value="40000">₹40,000</option>
        </Select>
      </Box>
    </>
  );
};
