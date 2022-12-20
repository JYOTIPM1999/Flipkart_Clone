import { Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const UploadWidget = () => {
  const [images, setImages] = useState([]);

  function handleUploadimage() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dknaigwrs",
        uploadPreset: "flipkart-user",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    // open widget
    myWidget.open()
  }
  return <>
  <Button onClick={handleUploadimage} >Upload</Button>
  </>;
};

export default UploadWidget;
