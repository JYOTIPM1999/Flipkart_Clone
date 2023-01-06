import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./main.module.css";
import {FaSuitcase} from "react-icons/fa"
import {MdStars} from "react-icons/md"
import {AiOutlineGift} from "react-icons/ai"
import {FiHelpCircle} from "react-icons/fi"

var miscdata = [
  {h:"Flipkart: The One-stop Shopping Destination",
  t:"E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down."},
  {h:"No Cost EMI",
  t:"In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply."},
  {h:"EMI on Debit Cards",
  t:"Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply."},
  {h:"Large Appliances",
  t:"Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our Dependable TV and Appliance Store ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and installation as per your convenience and a double warranty (Official Brand Warranty along with an extended Flipkart Warranty) - rest assured, value for money is what is promised and delivered. Shop from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many others."},
  {h:"Lifestyle",
  t:"Flipkart, 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time."},
  {h:"Home and Furniture",
  t:"Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. Be FurniSure, always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes."},
]

function Footer() {
  return (
    <>
    {
      miscdata.map((elem)=>(
        <Box bg="white" p="3" >
          <Text fontSize={17} fontWeight={700}  color="gray" >{elem.h}</Text>
          <Text fontSize={12}  color="gray.500" >{elem.t}</Text>
        </Box>
      ))
    }
      {/* <VStack
      
        bgColor="rgb(23,35,55)"
        color={"white"}
        fontSize="xs"
        w={"100%"}
        p={"30px 60px 20px 60px"}
        boxSizing="border-box"
      >
        <HStack
          justifyContent={"space-evenly"}
          alignItems="flex-start"
          spacing={0}
          w="100%"
          textAlign={"left"}
          mb="30px"
        >
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>ABOUT</Text>
            <Text>Contact Us</Text>
            <Text>About Us</Text>
            <Text>Carrers</Text>
            <Text>Flipkart Stories</Text>
            <Text>Press</Text>
            <Text>Flipkart Wholesale</Text>
            <Text>Corporate Information</Text>
          </VStack>
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>HELP</Text>
            <Text>Payments</Text>
            <Text>Shipping</Text>
            <Text>Cancellation & Returns</Text>
            <Text>FAQ</Text>
            <Text>Report Infrigement</Text>
          </VStack>
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>POLICY</Text>
            <Text>Return Policy</Text>
            <Text>Teams Of Use</Text>
            <Text>Security</Text>
            <Text>Privacy</Text>
            <Text>Sitemap</Text>
            <Text>EPR Compliance</Text>
          </VStack>
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>SOCIAL</Text>
            <Text>Facebook</Text>
            <Text>Twitter</Text>
            <Text>YouTube</Text>
          </VStack>
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>Mail Us : </Text>
            <Text>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </Text>
          </VStack>

          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>Registered Office Address:</Text>
            <Text>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: <span>044-45614700</span>
            </Text>
          </VStack>
        </HStack>
        <Divider orientation="horizontal" width={"100vw"} />
        <HStack gap={"70px"} p="20px 0px 10px 0px">
          <Button leftIcon={<FaSuitcase color="yellow" />} variant="ghost" >Become A Seller</Button>
          <Button leftIcon={<MdStars       color="yellow" />} variant="ghost" >Advertise</Button>
          <Button leftIcon={<AiOutlineGift color="yellow" />} variant="ghost" >Gift Cards</Button>
          <Button leftIcon={<FiHelpCircle  color="yellow" />} variant="ghost" >Help Center</Button>
          <Text>© 2007-2022 Flipkart.com</Text>
          <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
        </HStack>
      </VStack> */}
    </>
  );
}

export default Footer;
