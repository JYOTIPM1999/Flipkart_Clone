import Box from "@mui/material/Box";
import styles from "./ProductPage.module.css";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";
import { AiFillStar } from "react-icons/ai";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";

function ProductPage() {
  const [wishlist, setWishlist] = useState(true);

  const handleClick = () => {
    setWishlist(!wishlist);
  };
  return (
    <>
      <Box
        // border="1px solid gray"
        height="270px"
        display="flex"
        gap={"10px"}
        paddingTop="20px"
      >
        <Box width={"20%"}>
          <Box marginLeft={"90%"} onClick={handleClick} marginBottom="10px">
            <BsFillHeartFill
              color={wishlist ? "red" : "gray"}
              cursor="pointer"
            />
          </Box>
          <Box align="center" margin={"auto"}>
            <img
              src="https://rukminim1.flixcart.com/image/312/312/kzn17680/television/o/q/p/a-3210s-f-adsun-original-imagbhqzhafpzhyz.jpeg?q=70"
              width="80%"
            />
          </Box>
          <h3>Add to compare</h3>
        </Box>

        <Stack width={"50%"}>
          <Typography fontSize={"18px"} fontWeight="600">
            Adsun Frameless 80 cm (32 inch) HD Ready LED Smart Android Based TV
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box className={styles.stardiv}>
              3.8 <AiFillStar />
            </Box>
            <Typography fontSize={"14px"} color="gray">
              10000 Ratings &
            </Typography>
            <Typography fontSize={"14px"} color="gray">
              2500 Reviews
            </Typography>
          </Stack>
          <ul>
            <li>Operating System: Android Based</li>
            <li>HD ready 1366 x 768 Pixels</li>
            <li>3 Years Standard Manufaturer warranty</li>
          </ul>
        </Stack>

        <Stack width={"30%"}>
          <Stack direction="row" alignItems="center" gap={"40px"}>
            <Typography variant="h5" fontWeight={"bold"}>
              ₹8,900
            </Typography>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              width="80px"
              height="20px"
            />
          </Stack>
          <Stack direction="row" gap="10px">
            <Typography fontSize={"14px"} color="gray" as="s">
              ₹29900{" "}
            </Typography>
            <Typography
              fontSize={"14px"}
              color="rgb(38, 165, 65)"
              fontWeight={"600"}
            >
              70% off
            </Typography>
          </Stack>
          <Typography fontSize={"12px"}>Free delivery</Typography>
          <Typography
            fontSize={"16px"}
            color="rgb(38, 165, 65)"
            fontWeight={"bold"}
          >
            Bank Offer
          </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default ProductPage;
