import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logos/logo.svg";
import jay from "../assets/team-1/jay-patel.png";

const Ourstory = () => {
  return (
    <>
      <Box
        bgGradient="linear(to-r, #020c2b, #041E5B)"
        height={"50vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Text
          color={"white"}
          fontSize={{
            base: "2rem",
            md: "2rem",
            lg: "3rem",
            xl: "4rem",
            "2xl": "5rem",
          }}
          fontWeight={"bold"}
        >
          OUR STORY
        </Text>
      </Box>

      <Box
        display={"flex"}
        w={{
          base: "80%",
          sm: "80%",
          md: "80%",
          lg: "80%",
          xl: "80%",
          "2xl": "80%",
        }}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        m={"auto"}
        mt={9}
        gap={10}
      >
        <Image
          src={logo}
          w={{
            base: "50%",
            sm: "50%",
            md: "40%",
            lg: "40%",
            xl: "40%",
            "2xl": "20%",
          }}
        />
        <Box>
          <Text
            fontSize={"2rem"}
            fontWeight={"bold"}
            mt={{
              base: "0rem",
              sm: "0rem",
              md: "5rem",
              lg: "5rem",
              xl: "5rem",
              "2xl": "5rem",
            }}
          >
            Who we are
          </Text>
          <Text fontSize={"18px"}>
            Finix196 is a leading entity in the ecosystem of real-world asset
            tokenization, offering a suite of services for tokenizing
            securities, real estate, and other tangible assets. Our platform
            facilitates compliant tokenization and secondary trading, enabling
            seamless liquidity for tokenized assets. Finix196 prioritizes
            regulatory compliance, investor protection, and transparency in its
            tokenization process, providing clients with confidence and peace of
            mind.
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        w={{
          base: "80%",
          sm: "80%",
          md: "80%",
          lg: "80%",
          xl: "80%",
          "2xl": "80%",
        }}
        m={"auto"}
        mt={9}
        gap={10}
        mb={5}
      >
        <Image
          src={jay}
          w={{
            base: "50%",
            sm: "50%",
            md: "40%",
            lg: "40%",
            xl: "40%",
            "2xl": "20%",
          }}
          mt={"1rem"}
        />
        <Box>
          <Text fontSize={"2rem"} fontWeight={"bold"}>
            Message from Chairman and CEO : Dr. Jay Patel
          </Text>
          <Text fontSize={"18px"}>
            With more than three decades of experience as a real estate
            investor, I have witnessed significant developments in private
            market investing worldwide. However, despite these advancements, we
            continue to encounter the same challenges from the past. The process
            of securitizing real estate remains cumbersome, inefficient, and
            lacks transparency.
          </Text>
          <Text fontSize={"18px"} mt={4}>
            At Finix196, we wish to disrupt the Real Asset world by embracing
            cutting-edge technology and revolutionizing the market through
            blockchain technology. We strongly believe in the advantages that
            the digitization of financial assets can deliver to all stakeholders
            in the value chain. This encompasses significant enhancements in
            information transparency, automation, distribution, and ultimately,
            liquidity. Through our strategic partnerships and proprietary IP, we
            serve as a catalyst for firms seeking to digitize and optimize their
            real asset holdings.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Ourstory;
