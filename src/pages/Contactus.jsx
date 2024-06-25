import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./contactus.module.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { add_contact_us_form } from "../Redux/ContactUs/action";
import { set } from "firebase/database";

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

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { success, error } = useSelector((store) => store.contactUsReducer);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Simple form validation (you can enhance this as needed)
  //   if (!name || !email || !phoneNumber || !message) {
  //     alert("Please fill in all fields");
  //     return;
  //   }

  //   try {
  //     const contactCollectionRef = collection(firestore, "Contact_Us");
  //     await addDoc(contactCollectionRef, {
  //       name,
  //       email,
  //       phoneNumber,
  //       message,
  //       timestamp: new Date(),
  //     });
  //     setSubmitted(true);
  //     setName("");
  //     setEmail("");
  //     setPhoneNumber("");
  //     setMessage("");
  //   } catch (error) {
  //     console.error("Error saving data: ", error);
  //   }
  // };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phoneNumber && message) {
      dispatch(add_contact_us_form(name, email, phoneNumber, message)).then(
        () => {
          setSubmitted(true);
          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
        }
      );
    }
  };

  return (
    <Box mb={10}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Text
          fontSize={{
            base: "40px",
            sm: "40px",
            md: "40px",
            lg: "60px",
            xl: "60px",
          }}
        >
          Get In Touch
        </Text>
        <Text pb={10} fontSize={"20px"}>
          Please answer few questions to book a meeting with our investment team
        </Text>
        <Divider />
      </Box>
      <Box
        w={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "50%",
          xl: "50%",
        }}
        m={"auto"}
        mt={7}
      >
        {/* <div id="hubspotForm" className={styles.hbsptForm}></div> */}
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="John Doe"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@example.com"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <PhoneInput
              placeholder="Enter your phone number"
              containerStyle={{ width: "100%" }}
              inputStyle={{ width: "100%" }}
              country={"us"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Enter your message here"
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg">
            Submit
          </Button>
        </form>
      </Box>
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
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank You!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Your form has been successfully submitted. We will get in touch
              with you soon.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                window.location.reload();
                onClose();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
};

export default Contactus;
