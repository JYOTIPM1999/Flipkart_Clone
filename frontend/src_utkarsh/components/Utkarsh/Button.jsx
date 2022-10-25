import { Button } from "@chakra-ui/react";
import React from "react";

const Btn = ({he,w,cs,li,ch}) => {
  return (
    <Button
      h={he}
      borderRadius="2"
      w={w}
      color={"white"}
      colorScheme={cs}
      leftIcon={li}
    >
      {ch}
    </Button>
  );
};

export default Btn;
