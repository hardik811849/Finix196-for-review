import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import illustration from "../assets/loginIllustration.b0a721e2 1.svg";
import { Check, Mail, User } from "lucide-react";

const steps = [
  { label: "Create Securitize iD", icon: User },
  { label: "Verify profile", icon: Mail },
  { label: "Ready to invest", icon: Check },
];

const Invest = () => {
  return (
    <div>
      <Box
        bgGradient="linear(to-r, #020c2b, #041E5B)"
        height={"50vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        flexDirection={"column"}
      >
        <Text
          color={"white"}
          fontSize={{
            base: "1.8rem",
            md: "1.8rem",
            lg: "3rem",
            xl: "4rem",
            "2xl": "5rem",
          }}
          fontWeight={"bold"}
        >
          Welcome to the Finix196
        </Text>
        <Text
          color={"white"}
          fontSize={{
            base: "1.4rem",
            md: "1.4rem",
            lg: "3rem",
            xl: "4rem",
            "2xl": "3rem",
          }}
          fontWeight={"bold"}
        >
          Investor Dashboard
        </Text>
      </Box>

      <Box
        display={"flex"}
        w={{
          base: "90%",
          md: "80%",
          lg: "80%",
          xl: "80%",
          "2xl": "80%",
        }}
        m={"auto"}
        gap={{
          base: "1rem",
          md: "1rem",
          lg: "1rem",
          xl: "6rem",
          "2xl": "10rem",
        }}
      >
        <Box mt={10} mb={10}>
          <Text w={"80%"} mt={7} fontSize={"1.2rem"}>
            Create an account in order to continue. What is Id?? Should this
            state A single sign in account with a unique ID, provides access to
            Finix196 investment opportunities in addition to wider alternative
            investment opportunities.
          </Text>

          <Box
            display={"flex"}
            flexDirection={{
              base: "row",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            alignItems={"center"}
            gap={{
              base: 3,
              sm: 5,
              md: 5,
              lg: 8,
              xl: 8,
              "2xl": 8,
            }}
            mt={10}
          >
            <Box
              w={{
                base: "5rem",
                sm: "6rem",
                md: "10rem",
                lg: "10rem",
                xl: "10rem",
                "2xl": "10rem",
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Box bg={"#05256e"} w={"fit-content"} p={"2"} rounded={"full"}>
                  <User color="white" />
                </Box>
                <Box flex="1" borderBottom="2px solid #05256e" ml="4" />
              </Box>
              <Text mt={3}>1. KYC /AML </Text>
              <Text>&nbsp;</Text>
            </Box>
            <Box
              w={{
                base: "5rem",
                sm: "6rem",
                md: "10rem",
                lg: "10rem",
                xl: "10rem",
                "2xl": "10rem",
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Box bg={"#05256e"} w={"fit-content"} p={"2"} rounded={"full"}>
                  <Mail color="white" />
                </Box>
                <Box flex="1" borderBottom="2px solid #05256e" ml="4" />
              </Box>
              <Text mt={3}>2. Amount to be Purchased</Text>
            </Box>
            <Box
              w={{
                base: "5rem",
                sm: "6rem",
                md: "10rem",
                lg: "10rem",
                xl: "10rem",
                "2xl": "10rem",
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Box bg={"#05256e"} w={"fit-content"} p={"2"} rounded={"full"}>
                  <Check color="white" />
                </Box>
              </Box>
              <Text mt={3}>3. Banking details</Text>
              <Text
                display={{
                  base: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                }}
              >
                &nbsp;
              </Text>
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={{
              base: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
              "2xl": "flex-start",
            }}
          >
            <Button
              bg={"#ff5800"}
              color={"white"}
              mt={10}
              w={"30%"}
              borderRadius={"none"}
              p={6}
            >
              Invest
            </Button>
          </Box>
        </Box>
        <Box
          w={{
            base: "40%",
            md: "40%",
            lg: "40%",
            xl: "80%",
            "2xl": "60%",
          }}
          display={{
            base: "none",
            md: "none",
            lg: "none",
            xl: "flex",
            "2xl": "flex",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={illustration} alt="illustration" w={"100%"} />
        </Box>
      </Box>
    </div>
  );
};

export default Invest;
