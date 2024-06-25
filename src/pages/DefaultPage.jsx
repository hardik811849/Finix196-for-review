import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import newLogo from "../assets/logos/Frame 1618873748.svg";
import { useDispatch, useSelector } from "react-redux";
import { add_emails_news_letter } from "../Redux/NewLetter/action";
import commingSoon from "../assets/Screenshot_2024-06-21_125513-removebg-preview-transformed.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const DefaultPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { success, error } = useSelector((store) => store.newsLetterReducer);

  const handleSubmit = () => {
    if (email) {
      dispatch(add_emails_news_letter(email)).then(() => {
        setEmail("");
        setSubmitted(true);
      });
    }
  };

  return (
    <>
      <Box position="relative" height="100vh" overflow="hidden">
        {/* Video background */}
        <Box>
          <video
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              width: "100%",
              height: "100dvh",
              objectFit: "cover",
            }}
          >
            <source
              src="https://res.cloudinary.com/df6bctdlx/video/upload/v1718962376/Finix196/bakiwqwxctsmwbyr8apx.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity={0.7}
          bgGradient="linear(to-b, #020c2b, #041E5B)"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        ></Box>{" "}
        <Box
          position={"absolute"}
          top={"37%"}
          left={"1%"}
          display={{
            base: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          m={"auto"}
          mt={10}
          height={"7rem"}
          w={"-webkit-fit-content"}
        >
          <Link
            to={"https://www.linkedin.com/company/finix196/"}
            target="_blank"
          >
            <FaLinkedinIn color="white" />
          </Link>
          <Link to={"https://x.com/Finix5346831858"} target="_blank">
            <BsTwitterX color="white" />
          </Link>
          <Link to={"https://www.youtube.com/@Finixcapital1"} target="_blank">
            <FaYoutube color="white" />
          </Link>
        </Box>
        <Box
          position={"absolute"}
          bottom={"3%"}
          left={"30%"}
          display={{
            base: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
          m={"auto"}
          mt={10}
          w={"40%"}
        >
          <Link
            to={"https://www.linkedin.com/company/finix196/"}
            target="_blank"
          >
            <FaLinkedinIn color="white" />
          </Link>
          <Link to={"https://x.com/Finix5346831858"} target="_blank">
            <BsTwitterX color="white" />
          </Link>
          <Link to={"https://www.youtube.com/@Finixcapital1"} target="_blank">
            <FaYoutube color="white" />
          </Link>
        </Box>
        <Box
          position={"absolute"}
          top={{
            base: "20%",
            sm: "20%",
            md: "20%",
            lg: "10%",
            xl: "10%",
            "2xl": "10%",
          }}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          w={{
            base: "90%",
            sm: "90%",
            md: "70%",
            lg: "50%",
            xl: "40%",
            "2xl": "50%",
          }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={newLogo}
            w={{
              base: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "23%",
            }}
            alt="Finix196"
            mb={4}
          />{" "}
          {/* <Text
            fontSize={{
              base: "30px",
              md: "40px",
              lg: "44px",
              xl: "30px",
              "2xl": "40px",
            }}
            color={"white"}
            w={{
              base: "80%",
              sm: "80%",
              md: "70%",
              lg: "50%",
              xl: "60%",
              "2xl": "100%",
            }}
            textAlign={"center"}
          >
            Unlocking Liquidity & Opportunities
          </Text> */}
        </Box>
        <Box
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          w={{
            base: "90%",
            sm: "90%",
            md: "70%",
            lg: "50%",
            xl: "40%",
            "2xl": "50%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "column",
              "2xl": "column",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            pt={{
              base: "50px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "100px",
            }}
          >
            <Image src={commingSoon} />
            {/* <Text
              fontSize={{
                base: "2rem",
                xsm: "2rem",
                sm: "6rem",
                md: "6rem",
                lg: "6rem",
                xl: "8rem",
                "2xl": "8rem",
              }}
              fontWeight={"bold"}
              color={"white"}
            >
              COMING SOON
            </Text> */}
            <Text color={"white"} fontSize={"20px"}>
              Join the Waiting List
            </Text>
            <Box
              w={{
                base: "100%",
                sm: "50%",
                md: "50%",
                lg: "50%",
                xl: "40%",
                "2xl": "60%",
              }}
              mt={"3rem"}
            >
              {" "}
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="email"
                    p={6}
                    placeholder="Enter Your Email"
                    _placeholder={{ color: "white" }}
                    color={"white"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputRightElement w={"30%"} pt={2} pr={1}>
                    <Button
                      bg={"#ff5800"}
                      w={"100%"}
                      color={"white"}
                      variant={"unstyled"}
                      type="submit"
                    >
                      Notify
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </form>
              <Text color={"white"} textAlign={"center"}>
                Get notified when we are live
              </Text>
              {submitted && (
                <Text mt={4} color="#ff5800" textAlign={"center"}>
                  Thank you for subscribing!
                </Text>
              )}{" "}
              {error && (
                <Text mt={4} color="red">
                  Error: {error.message}
                </Text>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DefaultPage;
