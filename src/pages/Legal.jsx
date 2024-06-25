import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Legal = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} mt={10}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        w={"70%"}
        mb={6}
      >
        {" "}
        <Text fontWeight={"bold"} fontSize={"1.8rem"} textAlign={"center"}>
          LEGAL DISCLAIMER{" "}
        </Text>
        <Text fontWeight={"bold"} fontSize={"1.2rem"} textAlign={"center"}>
          LAST UPDATED JUNE 12, 2024{" "}
        </Text>
        <Text mt={6}>
          THE DATA OR INFORMATION PROVIDED HEREIN BY FINIX196 CAPITAL INC.
          (“WE”, “US”, OR “OUR”) ON THIS SITE (THE “SITE”) IS FOR GENERAL USE
          FOR ANY USER. ALL DATA ON THE SITE IS GIVEN IN CONFIDENCE AND SHALL BE
          CONSIDERED CONFIDENTIAL, BE THAT AS IT MAY, WE MAKE NO REPRESENTATION
          OR GUARANTEE OF ANY KIND, EXPRESS, IMPLIED, OR INFERRED, WITH RESPECT
          TO THE PRECISION, AVAILABILITY, AMPLENESS, LEGITIMACY, VALIDITY,
          DEPENDABILITY, COMPLETENESS, QUALITY, ACCESSIBILITY, OR COMPLETENESS
          OF ANY DATA ON THE SITE. NOTHING HEREIN SHALL BE CONSIDERED A LEGAL
          CONTRACT OR LEGALLY BINDING INSTRUMENT. WE SHALL NOT HAVE ANY
          LIABILITY UNDER ANY CIRCUMSTANCES FOR THE INFORMATION PROVIDED HEREIN.
          USE THE INFORMATION HEREIN AT YOUR OWN RISK.
        </Text>
      </Box>
    </Box>
  );
};

export default Legal;
