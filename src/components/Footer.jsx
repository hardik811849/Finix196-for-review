import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/Frame 1618873748.svg";

const Footer = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "//js.hsforms.net/forms/embed/v2.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     if (window.hbspt) {
  //       window.hbspt.forms.create({
  //         region: "na1",
  //         portalId: "46451609",
  //         formId: "d13b207a-7af5-438a-9f67-003536f7291c",
  //         target: "#hubspotForm",
  //         onFormSubmitted: () => {
  //           onOpen();
  //         },
  //       });
  //     }
  //   };
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, [onOpen]);

  return (
    <>
      <Box bgGradient="linear(to-r, #020c2b, #041E5B)" color={"white"} p={2}>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "90%",
            "2xl": "90%",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          m={"auto"}
          mt={"5rem"}
          gap={"2rem"}
          rowGap={{
            base: "5rem",
            sm: "5rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
            "2xl": "3rem",
          }}
        >
          <Box
            textAlign={{
              base: "left",
              sm: "left",
              md: "left",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
            gridColumn={{
              base: "span 2",
              sm: "span 3",
              md: "span 1",
              lg: "span 1",
              xl: "span 1",
              "2xl": "span 1",
            }}
            height={{
              base: "12rem",
              sm: "12rem",
              md: "14rem",
              lg: "14rem",
              xl: "14rem",
              "2xl": "14rem",
            }}
          >
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <Image
                src={logo}
                w={"80%"}
                m={{
                  base: "auto",
                  sm: "auto",
                  md: "inherit",
                  lg: "inherit",
                  xl: "inherit",
                  "2xl": "inherit",
                }}
              />
            </Link>

            <Text
              fontSize={{
                base: "13px",
                sm: "13px",
                md: "15px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
              mb={8}
              mt={6}
              fontWeight={"semibold"}
            >
              Finix196 is tokenizing real estate assets across multiple chains
              on various ATS platforms, leveraging blockchain technology to
              revolutionize finance. Our mission is to enhance liquidity,
              interoperability, and yield generation through innovative
              financial products.
            </Text>
          </Box>

          {/* INVEST */}
          <Box
            height={{
              base: "100px",
              sm: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "14rem",
            }}
            pt={{
              base: "0rem",
              sm: "0rem",
              md: "0rem",
              lg: "0rem",
              xl: "0rem",
              "2xl": "4.5rem",
            }}
            textAlign={{
              base: "left",
              xsm: "left",
              sm: "left",
              md: "center",
              lg: "center",
              xl: "center",
              "2xl": "center",
            }}
          >
            <Text fontSize={"22px"} fontWeight={"semibold"} mb={5}>
              Invest
            </Text>
            {/* <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              <Link to={"/invest"} onClick={() => window.scrollTo(0, 0)}>
                Browse Investment
              </Link>
            </Text> */}
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
              fontWeight={"semibold"}
            >
              <Link to={"/invest"} onClick={() => window.scrollTo(0, 0)}>
                Create Account
              </Link>
            </Text>
          </Box>

          {/* LEARN */}

          <Box
            lineHeight={{
              base: "22px",
              sm: "22px",
              md: "normal",
              lg: "normal",
              xl: "30px",
              "2xl": "30px",
            }}
            height={{
              base: "100px",
              sm: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "14rem",
            }}
            pt={{
              base: "0rem",
              sm: "0rem",
              md: "0rem",
              lg: "0rem",
              xl: "0rem",
              "2xl": "4.5rem",
            }}
            textAlign={{
              base: "left",
              xsm: "left",
              sm: "left",
              md: "center",
              lg: "center",
              xl: "center",
              "2xl": "center",
            }}
          >
            <Text fontSize={"22px"} fontWeight={"semibold"} mb={5}>
              Learn
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
              fontWeight={"semibold"}
            >
              <Link to={"/how-it-works"} onClick={() => window.scrollTo(0, 0)}>
                How It Works
              </Link>
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
              fontWeight={"semibold"}
            >
              <Link
                to={"/how-we-are-different"}
                onClick={() => window.scrollTo(0, 0)}
              >
                How We Are Different
              </Link>
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
              fontWeight={"semibold"}
            >
              <Link
                to={"/tokenization-process"}
                onClick={() => window.scrollTo(0, 0)}
              >
                The Tokenization Process
              </Link>
            </Text>
            {/* <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
              fontWeight={"semibold"}
            >
              <Link to={"/faqs"} onClick={() => window.scrollTo(0, 0)}>
                FAQ's
              </Link>
            </Text> */}
          </Box>

          {/* FOR BUSINESS */}
          {/* <Box
            pt={{
              base: "0rem",
              sm: "0rem",
              md: "0rem",
              lg: "0rem",
              xl: "0rem",
              "2xl": "4.5rem",
            }}
            height={{
              base: "100px",
              sm: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "14rem",
            }}
          >
            <Text fontSize={"22px"} fontWeight={"semibold"} mb={5}>
              For Business
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              <Link>Real Estate Properties</Link>
            </Text>
          </Box> */}

          {/* LEGAL & REGULATORY */}
          {/* <Box
            pt={{
              base: "0rem",
              sm: "0rem",
              md: "0rem",
              lg: "0rem",
              xl: "0rem",
              "2xl": "4.5rem",
            }}
            height={{
              base: "100px",
              sm: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "14rem",
            }}
          >
            <Text fontSize={"22px"} fontWeight={"semibold"} mb={5}>
              Legal & Regulatory
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              <Link>Disclosures</Link>
            </Text>
          </Box> */}

          {/* ABOUT */}
          <Box
            pt={{
              base: "0rem",
              sm: "0rem",
              md: "0rem",
              lg: "0rem",
              xl: "0rem",
              "2xl": "4.5rem",
            }}
            height={{
              base: "100px",
              sm: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "14rem",
            }}
            textAlign={{
              base: "left",
              xsm: "left",
              sm: "left",
              md: "center",
              lg: "center",
              xl: "center",
              "2xl": "center",
            }}
          >
            <Text fontSize={"22px"} fontWeight={"semibold"} mb={5}>
              About
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
              fontWeight={"semibold"}
            >
              <Link to={"/our-story"} onClick={() => window.scrollTo(0, 0)}>
                Our Story
              </Link>
            </Text>
            {/* <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              <Link>Careers</Link>
            </Text> */}
          </Box>

          {/* Resources */}
          {/* <Box
            pt={{
              base: "0rem",
              sm: "0rem",
              md: "0rem",
              lg: "0rem",
              xl: "0rem",
              "2xl": "4.5rem",
            }}
            height={{
              base: "100px",
              sm: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "14rem",
            }}
          >
            <Text fontSize={"22px"} fontWeight={"semibold"} mb={5}>
              Resources
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              <Link>Whitepapers</Link>
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              <Link>Case Studies</Link>
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              <Link>Videos</Link>
            </Text>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              <Link>Industry Reports</Link>
            </Text>
          </Box> */}
        </Box>

        <Box w={"90%"} m={"auto"} mt={"8rem"} mb={"2rem"}>
          <Divider />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            textAlign={{
              base: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          >
            <Text pt={"2rem"} fontWeight={"semibold"}>
              Copyright © 2024 Finix196 Inc. | All Rights Reserved.
            </Text>

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
              pt={"2rem"}
              gap={{
                base: "1rem",
                sm: "1rem",
                md: "1rem",
                lg: "3rem",
                xl: "3rem",
                "2xl": "3rem",
              }}
            >
              <Text fontWeight={"semibold"}>
                <Link to={"/terms"} onClick={() => window.scrollTo(0, 0)}>
                  Terms of Use
                </Link>
              </Text>
              <Text fontWeight={"semibold"}>
                <Link
                  to={"/privacy-policy"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </Text>
              <Text fontWeight={"semibold"}>
                <Link
                  to={"/legal-disclaimer"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Legal Disclaimer
                </Link>
              </Text>
              <Text fontWeight={"semibold"}>
                <Link
                  to={"/cookies-policy"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Cookies Policy
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
