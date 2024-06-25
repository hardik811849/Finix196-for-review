import React, { useState } from "react";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { BsTwitterX } from "react-icons/bs";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { add_emails_news_letter } from "../Redux/NewLetter/action";
import { useDispatch, useSelector } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyBxu6jdMWMG5MfMjVK1MIilgjaU3m0mbYY",
  authDomain: "finix196-e36fc.firebaseapp.com",
  projectId: "finix196-e36fc",
  storageBucket: "finix196-e36fc.appspot.com",
  messagingSenderId: "296289201311",
  appId: "1:296289201311:web:5a37176494ebcc996086aa",
  measurementId: "G-99EY9ESG57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (email) {
  //     try {
  //       const emailsCollectionRef = collection(firestore, "News_Letter"); // Reference to the "01" collection
  //       await addDoc(emailsCollectionRef, { email }); // Add a new document with the email field
  //       setSubmitted(true);
  //       setEmail("");
  //     } catch (error) {
  //       console.error("Error saving data: ", error);
  //     }
  //   }
  // };

  const dispatch = useDispatch();
  const { success, error } = useSelector((store) => store.newsLetterReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(add_emails_news_letter(email)).then(() => {
        setSubmitted(true);
        setEmail("");
      });
    }
  };

  return (
    <Box
      w={"80%"}
      m={"auto"}
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(3,1fr)",
        "2xl": "repeat(7,1fr)",
      }}
      gap={"3rem"}
      mt={10}
      mb={10}
    >
      <Box
        gridColumn={{
          base: "span 1",
          sm: "span 1",
          md: "span 2",
          lg: "span 3",
          xl: "span 3",
          "2xl": "span 2",
        }}
      >
        <Text
          fontSize={{
            base: "20px",
            sm: "20px",
            md: "20px",
            lg: "20px",
            xl: "20px",
            "2xl": "20px",
          }}
          fontWeight="semibold"
        >
          Finix196 Monthly Newsletter: Stay Updated on RWA Tokenization and Real
          Estate Trends.
        </Text>
        <Text fontSize={"14px"}>
          <span style={{ color: "#ff5800", marginTop: "3px" }}>
            Join the 10,000+
          </span>{" "}
          subscribers.
        </Text>
      </Box>
      <Box
        gridColumn={{
          base: "span 1",
          sm: "span 1",
          md: "span 1",
          lg: "span 2",
          xl: "span 2",
          "2xl": "span 4",
        }}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems="center"
      >
        <form onSubmit={handleSubmit} style={{ width: "80%" }}>
          <InputGroup size="lg">
            <Input
              placeholder="Enter Email Address"
              borderColor={"020c2b"}
              borderRadius={"none"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputRightElement width="5rem">
              <Button
                size="lg"
                borderRadius={"none"}
                bg={"#ff5800"}
                color={"white"}
                type="submit"
                variant="unstyled"
                fontSize={"1rem"}
                pr={1}
                pl={1}
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
        {submitted && success && (
          <Text mt={4} color="#ff5800">
            Thank you for subscribing!
          </Text>
        )}{" "}
        {error && (
          <Text mt={4} color="red">
            Error: {error.message}
          </Text>
        )}
      </Box>
      <Box
        gridColumn={{
          base: "span 1",
          sm: "span 1",
          md: "span 1",
          lg: "span 1",
          xl: "span 1",
          "2xl": "span 1",
        }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        m={"auto"}
        w={{
          base: "80%",
          sm: "80%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        }}
        mt={10}
      >
        <Link to={"https://www.linkedin.com/company/finix196/"} target="_blank">
          <FaLinkedinIn />
        </Link>
        <Link to={"https://x.com/Finix5346831858"} target="_blank">
          <BsTwitterX />
        </Link>
        <Link to={"https://www.youtube.com/@Finixcapital1"} target="_blank">
          <FaYoutube />
        </Link>
        {/* <FaFacebookF /> */}
        {/* <FiInstagram /> */}
        {/* <FaTelegramPlane /> */}
      </Box>
    </Box>
  );
};

export default Newsletter;
