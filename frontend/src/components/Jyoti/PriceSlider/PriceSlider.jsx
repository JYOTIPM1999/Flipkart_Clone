import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";

export const PriceSlider = () => {
  return (
    <RangeSlider
      aria-label={["min", "max"]}
      min={0}
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
  );
};
