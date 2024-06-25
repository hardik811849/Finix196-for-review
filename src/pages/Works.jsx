import {
  Box,
  Button,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import icons from "../assets/icon/Icon.svg";
import icon1 from "../assets/icon/icon-1.svg";
import icon2 from "../assets/icon/icon-2.svg";
import icon3 from "../assets/icon/icon-3.svg";
import icon4 from "../assets/icon/icon-4.svg";
import Newsletter from "../components/Newsletter";

const Works = () => {
  const navigate = useNavigate();
  const handleInvest = () => {
    navigate("/invest");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Box
        bgGradient="linear(to-r, #020c2b, #041E5B)"
        height={"50vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
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
          HOW IT WORKS
        </Text>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
        p={{
          base: "1rem",
          sm: "1rem",
          md: "5rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "5rem",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={{
            base: "90%",
            sm: "90%",
            md: "70%",
            lg: "70%",
            xl: "70%",
            "2xl": "70%",
          }}
          justifyContent={"center"}
        >
          <Text
            fontSize={{
              base: "2rem",
              sm: "2rem",
              md: "3rem",
              lg: "3rem",
              xl: "3rem",
              "2xl": "3rem",
            }}
            mb={"1rem"}
            fontWeight={"bold"}
          >
            Highly Curated Offerings
          </Text>
          <Text mb={"1rem"} fontWeight={"semibold"}>
            Finix196 partners with leading asset managers and venture capital
            firms to bring institutional style investment opportunities to
            investors of all categories.
          </Text>

          <Box></Box>

          <Box>
            <Button
              bg={"#ff5800"}
              pt="16px"
              pb={"42px"}
              w={{
                base: "50%",
                sm: "50%",
                md: "25%",
                lg: "25%",
                xl: "25%",
                "2xl": "25%",
              }}
              color={"white"}
              borderRadius={"full"}
              variant={"unstyled"}
              onClick={handleInvest}
            >
              Invest Now
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        bgGradient="linear(to-r, #020c2b, #041E5B)"
        color={"white"}
        p={{
          base: "1rem",
          sm: "1rem",
          md: "5rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "5rem",
        }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "90%",
            "2xl": "90%",
          }}
        >
          <Text fontSize={"24px"} mb={5} textAlign={"center"}>
            RWA tokenization with Finix196 is a straightforward process designed
            to maximize efficiency and transparency. Here's an overview of our
            seamless flow:
          </Text>

          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(3,1fr)",
              "2xl": "repeat(3,1fr)",
            }}
            gap={{
              base: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "2rem",
              xl: "2rem",
              "2xl": "2rem",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              border={"2px solid #67bafe"}
              p={5}
              borderRadius={8}
            >
              <Image src={icons} w={"10%"} mt={"4rem"} mb={"2rem"} />
              <Text fontSize={"22px"} textAlign={"center"} mb={"1rem"}>
                Asset Identification
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                We at Finix196 use our extensive research-based approach to
                selecting ultra prime real-world assets that are ideal for
                tokenization. These assets are chosen for their strong financial
                performance and their capacity to produce consistent returns. An
                illustrative case is our Amarillo, Texas venture, where we
                demonstrated our ability in boosting the property's worth from
                $580,000 to $4.4 million through strategic enhancements and
                efficient oversight.
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              border={"2px solid #67bafe"}
              p={5}
              borderRadius={8}
            >
              {" "}
              <Image src={icon1} w={"10%"} mt={"4rem"} mb={"2rem"} />
              <Text fontSize={"22px"} textAlign={"center"} mb={"1rem"}>
                Legal Structuring
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                We work closely with our legal partners to ensure we have
                established a compliant legal framework for asset tokenization.
                By setting up the necessary legal structures, Finix196 ensures
                that the tokenization process adheres to all relevant
                regulations and provides a secure foundation for investors.
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              border={"2px solid #67bafe"}
              p={5}
              borderRadius={8}
            >
              {" "}
              <Image src={icon2} w={"10%"} mt={"4rem"} mb={"2rem"} />
              <Text fontSize={"22px"} textAlign={"center"} mb={"1rem"}>
                Digital Representation
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                Finix196 has created a rigorous process to ensure digital tokens
                can effectively represent fractional ownership of their
                underlying assets. These tokens are minted on the blockchain,
                providing a transparent and tamper-proof record of ownership.
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              border={"2px solid #67bafe"}
              p={5}
              borderRadius={8}
            >
              {" "}
              <Image src={icon3} w={"10%"} mt={"4rem"} mb={"2rem"} />
              <Text fontSize={"22px"} textAlign={"center"} mb={"1rem"}>
                Platform Integration
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                Finix196 have taken the best-in-class approach to ensure all
                tokens can be listed seamlessly onto proprietary and their party
                platforms where applicable, making them easily available to
                global investors. This integration ensures that the tokens can
                be easily accessed and traded by investors from around the
                world.
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              border={"2px solid #67bafe"}
              p={5}
              borderRadius={8}
            >
              {" "}
              <Image src={icon4} w={"10%"} mt={"4rem"} mb={"2rem"} />
              <Text fontSize={"22px"} textAlign={"center"} mb={"1rem"}>
                Trading and Liquidity
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                The Finix196 platform is tailored to facilitate ongoing trading,
                granting investors the capacity to effortlessly purchase and
                sell tokens. Finix196 has a global team who facilitate and focus
                on ensuring clients can trade quickly, with access to deep
                liquidity all whilst promoting a market-driven process for
                determining prices.
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              border={"2px solid #67bafe"}
              p={5}
              borderRadius={8}
            >
              {" "}
              <Image src={icon1} w={"10%"} mt={"4rem"} mb={"2rem"} />
              <Text fontSize={"22px"} textAlign={"center"} mb={"1rem"}>
                Property Improvement Plan (PIP)
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                At Finix196, pre-investment decision making is complemented by a
                comprehensive top-down and bottom-up analysis, followed by the
                creation of a Property Improvement Plan (PIP). The PIP outlines
                the initial investment required and management strategies aimed
                at increasing the property's value. This tailored approach
                ensures optimal value enhancement for each property is achieved.
              </Text>
            </Box>
          </Box>

          {/* <UnorderedList display={"flex"} flexDirection={"column"} gap={5}>
            <ListItem fontSize={"18px"}>
              <span style={{ fontWeight: "bold" }}>
                Asset Identification :&nbsp;
              </span>
              We at Finix196 use our extensive research-based approach to
              selecting ultra prime real-world assets that are ideal for
              tokenization. These assets are chosen for their strong financial
              performance and their capacity to produce consistent returns. An
              illustrative case is our Amarillo, Texas venture, where we
              demonstrated our ability in boosting the property's worth from
              $580,000 to $4.4 million through strategic enhancements and
              efficient oversight.
            </ListItem>
            <ListItem fontSize={"18px"}>
              <span style={{ fontWeight: "bold" }}>
                Legal Structuring :&nbsp;
              </span>
            </ListItem>
            <ListItem fontSize={"18px"}>
              <span style={{ fontWeight: "bold" }}>:&nbsp;</span>
            </ListItem>
            <ListItem fontSize={"18px"}>
              <span style={{ fontWeight: "bold" }}>:&nbsp;</span>
            </ListItem>
            <ListItem fontSize={"18px"}>
              <span style={{ fontWeight: "bold" }}>:&nbsp;</span>
            </ListItem>
            <ListItem fontSize={"18px"}>
              <span style={{ fontWeight: "bold" }}>:&nbsp;</span>
            </ListItem>
          </UnorderedList> */}
        </Box>
      </Box>

      <Newsletter />
    </>
  );
};

export default Works;
