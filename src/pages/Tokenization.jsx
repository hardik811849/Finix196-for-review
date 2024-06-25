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
import token from "../assets/token.svg";
import token_process from "../assets/blockchain_process.png";
import Newsletter from "../components/Newsletter";
import icons from "../assets/icon/Icon.svg";
import icon1 from "../assets/icon/icon-1.svg";
import icon2 from "../assets/icon/icon-2.svg";
import icon3 from "../assets/icon/icon-3.svg";
import icon4 from "../assets/icon/icon-4.svg";

const Tokenization = () => {
  const navigate = useNavigate();
  const handleInvest = () => {
    navigate("/invest");
  };
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
          THE TOKENIZATION PROCESS
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
          w={"90%"}
          justifyContent={"center"}
        >
          <Box>
            <Image src={token_process} />
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
          <Text fontSize={"20px"} mb={5}>
            The Tokenization process at Finix196 involves several key steps to
            ensure a secure and efficient transition of assets onto the
            blockchain:
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
                Asset Selection
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                Choose assets with strong financial performance. We focus on
                assets that have demonstrated stability and potential for
                growth, ensuring that they meet our high standards for
                tokenization. For instance, Finix196 has successfully purchased
                properties worth $130 million for $80 million, demonstrating our
                expertise in acquiring valuable assets at substantial discounts.
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
                Due Diligence
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                Conduct thorough due diligence to validate asset quality. This
                includes detailed assessments of the asset's financial health,
                market position, and potential risks, ensuring that only the
                best assets are tokenized.
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
                Token Creation
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                Mint digital tokens representing ownership. These tokens are
                created on the blockchain, providing a secure and transparent
                way to represent fractional ownership of the assets.
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
                Regulatory Compliance
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                Ensure compliance with relevant regulations. Our tokenization
                process is designed to meet all legal requirements, providing a
                secure and compliant framework for investors.
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
                Listing and Trading
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                List tokens on our marketplace for buying, selling, and trading.
                Our platform supports the secondary market, enabling investors
                to trade tokens with ease and ensuring liquidity.
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
                Yield Distribution Across Multiple Chains
              </Text>
              <Text fontSize={"18px"} textAlign={"center"}>
                Distribute yields generated from tokenized assets across
                multiple blockchain networks. This ensures that token holders
                can receive their returns on various chains, including Ethereum,
                Solana, Provenance, Base, and more. This multichain distribution
                enhances accessibility and flexibility for investors, allowing
                them to receive returns in the blockchain ecosystem of their
                choice
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Newsletter />
    </>
  );
};

export default Tokenization;
