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
import Newsletter from "../components/Newsletter";
import icons from "../assets/icon/Icon.svg";
import icon1 from "../assets/icon/icon-1.svg";
import icon2 from "../assets/icon/icon-2.svg";
import icon3 from "../assets/icon/icon-3.svg";
import icon4 from "../assets/icon/icon-4.svg";

const Different = () => {
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
          HOW WE ARE DIFFERENT
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
            investors of all categories
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
          <Text fontSize={"24px"} mb={5}>
            Finix196 takes a revolutionary approach in the tokenization of
            RWA’s. This market leading approach is achieved through the
            effective combination of :
          </Text>

          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
              xl: "repeat(2,1fr)",
              "2xl": "repeat(4,1fr)",
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
              {" "}
              <Image src={icons} w={"10%"} mt={"4rem"} mb={"2rem"} />
              <Text fontSize={"22px"} textAlign={"center"} mb={"1rem"}>
                Direct On-Chain Issuance{" "}
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                Finix196 faciliates the direct issuance of RWAs on the
                blockchain, eliminating the need for costly and complex SPVs.
                Through this approach, Finix196 ensures greater transparency,
                efficiency, and cost-effectiveness for their clients.
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
                Tokenized Holding Company Structure
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                Through the use of Proton RWA Token, Finix196 adopts a fully
                regulated tokenized holding company structure. This structure
                allows for the creation of a holding company that owns an active
                real estate portfolio, generating yields between 8-22%. The
                Proton tokens have burn and mint functionality, ensuring
                flexibility and alignment with the real estate properties in the
                portfolio.
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
                Global Partnerships
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                Finix196 maintain strategic partnerships with global digital
                exchanges and marketplaces to enhance liquidity and broaden our
                investor base. These collaborations create a unified investment
                environment, ensuring seamless trading and harmonized regulatory
                compliance.
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
              <Text fontSize={"16px"} textAlign={"center"}>
                The Finix196 platform is built to comply with the latest legal
                frameworks, ensuring security and transparency in all
                transactions. Finix196 have extensive experience in
                multi-jurisdictional regulatory requirements, providing a secure
                and transparent investment process to all investors.
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
                Innovative Technology
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                Finix196 leverages cutting-edge blockchain technology to
                streamline the tokenization process, improve efficiency, and
                enhance security. Our platform is designed to facilitate
                seamless trading and ownership transfer, making it easier for
                investors to participate in the RWA market.
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
                Multichain Integration
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                Finix196 supports multichain integration across 15 leading
                blockchain networks, including Solana, Ethereum, Provenance, and
                Base, among others. This ensures our tokenized assets are
                accessible and tradeable on multiple platforms, providing
                greater flexibility and reach.
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
                Multi ERC Standard Compatibility
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                Our platform is compatible with multiple ERC standards,
                including ERC-721, ERC-20, ERC-3643, and ERC-1155. Additionally,
                we are preparing to support ERC-7518 and ERC-4626. This wide
                range of standards ensures that our tokens can cater to various
                use cases and investor preferences.
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
                Comprehensive Ecosystem
              </Text>
              <Text fontSize={"16px"} textAlign={"center"}>
                Finix196 offers a complete ecosystem for RWA tokenization,
                including consultancy, technology, regulatory & compliance
                oversight, distribution via Alternative Trading Systems (ATS),
                and secondary trading via exchanges. This holistic approach
                ensures a smooth and efficient tokenization process through the
                whole lifecycle.
              </Text>
            </Box>
          </Box>

          {/* <UnorderedList display={"flex"} flexDirection={"column"} gap={5}>
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

export default Different;
