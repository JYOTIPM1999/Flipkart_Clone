import { Box } from "@chakra-ui/react";
import { ConcludeFlip } from "./ConcludeFlip";
import styles from "./main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainSliderComp, MultiSliderComp } from "./SliderComp";
import { SlideData } from "./SlideData";
import HomeSecondHeader from "./HomeSecondHeader";

export const Ho = () => {
  // console.log(SlideData)
  return (
    <div id={styles.mainContainerHomePage}>
      <Box width="100%" border={"1px solid blue"}>
        <Box
          width={"100%"}
          // border={"1px solid red"}
          bgColor="#FFFFFF"
          boxSizing="border-box"
        >
          <HomeSecondHeader />
        </Box>

        <Box
          width={"100%"}
          m="auto"
          // border={"1px solid red"}
          p="0px 8px 0px 8px"
        >
          {/* <MainSliderComp slides={SlideData} /> */}
        </Box>

        <Box
          width={"100%"}
          m="auto"
          // border={"1px solid red"}
          p="0px 8px 0px 8px"
        >
          <MultiSliderComp slides={SlideData} />
        </Box>

        <Box
          width={"100%"}
          mb="50px"
          // border={"1px solid red"}
        >
          {/* <ConcludeFlip /> */}
        </Box>

        <Box
          width={"100%"}
          //  border="1px solid red"
        ></Box>
      </Box>
    </div>
  );
};
