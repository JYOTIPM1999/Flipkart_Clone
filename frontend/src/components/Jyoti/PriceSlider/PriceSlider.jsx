import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";

export const PriceSlider = () => {

  const [data , setData] = useState([0,70000])
  const handleChange =(data)=>{
    if(data[1]>30000)
    {
     setData(data)
    }
  
    {
        var a = document.getElementById("one")
        a.value = 30000
    }
  }
  return (
    <>
    <RangeSlider
      aria-label={["min", "max"]}
      min={0}
      id="one"
      value={data}
     onChange={(val)=>handleChange(val)}
      max={80000}
      colorScheme="blue"
      defaultValue={[0, 15000]}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
    {data[0]}
    {data[1]}
    </>
  );
};
