import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

const data = [
  {
    src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png",
  },
  {
    src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png",
  },
  {
    src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png",
  },
  {
    src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png",
  },
  {
    src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png",
  },
  {
    src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png",
  },
  {
    src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png",
  },
  {
    src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png",
  },
];

<<<<<<< HEAD
export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
=======
export function MainSliderComp({ slides }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box mt="50px" border={"1px solid green"} height="280px">
      <Slider {...settings}>
        {slides.map((el, i) => {
          return (
            <Box key={i}>
              <Image src={el.img} width="100%" />;
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}

// --------------------------MultiComp-----------------------

export function MultiSliderComp({ slides }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box mt="7px" boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"  >
      <Slider {...settings}>
        {slides.map((el, i) => {
          return (
            <Box key={i}>
              <MultiSliderCart key={i} data={{ ...el }} />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}

// ----------------------------------Slider Arrows ---------------------------------

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(40,116,240,.8)",
        height: "50px",
        width: "30px",
        zIndex: "1",
        position: "absolute",
        right: "0px",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(40,116,240,.8)",
        height: "50px",
        width: "30px",
        zIndex: "1",
        position: "absolute",
        left: "0px",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
      onClick={onClick}
    />
  );
>>>>>>> 0329850c346eedcea6f55f130208b071671b1954
}
