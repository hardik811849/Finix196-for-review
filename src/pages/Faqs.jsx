import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { faqs } from "./data";
import { useNavigate } from "react-router-dom";

const Faqs = () => {
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
        flexDirection={"column"}
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
        >
          Frequently Asked Questions
        </Text>
        <Text
          color={"white"}
          fontSize={{
            base: "1rem",
            md: "1rem",
            lg: "20px",
            xl: "20px",
            "2xl": "30px",
          }}
        >
          We're here to help.
        </Text>
      </Box>

      <Box m={"auto"} display={"flex"} justifyContent={"center"} mt={10}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          w={{
            base: "90%",
            sm: "90%",
            md: "70%",
            lg: "70%",
            xl: "50%",
            "2xl": "50%",
          }}
        >
          {faqs.map((faq, index) => (
            <Box key={index} mb="4">
              <Heading as="h2" size="lg" mb="4">
                {faq.category}
              </Heading>
              <Accordion defaultIndex={[]} allowToggle allowMultiple>
                {faq.questions?.map((questionItem, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    p={3}
                    mb={{
                      base: "2rem",
                      xsm: "2rem",
                      sm: "2rem",
                      md: "2rem",
                      lg: "2rem",
                      xl: "2rem",
                      "2xl": "1.5rem",
                    }}
                    border={"2px solid #041E5B"}
                    borderRadius={"3rem"}
                    _hover={{ background: "none" }}
                  >
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={"bold"}
                          _hover={{ background: "none" }}
                        >
                          {questionItem.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {questionItem.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
                {faq.terms?.map((termItem, tIndex) => (
                  <AccordionItem
                    key={tIndex}
                    p={3}
                    mb={{
                      base: "2rem",
                      xsm: "2rem",
                      sm: "2rem",
                      md: "2rem",
                      lg: "2rem",
                      xl: "2rem",
                      "2xl": "1.5rem",
                    }}
                    border={"2px solid #041E5B"}
                    borderRadius={"3rem"}
                  >
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={"bold"}
                        >
                          {termItem.term}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {termItem.definition}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))}
        </Box>
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
        bgGradient="linear(to-r, #020c2b, #041E5B)"
        color={"white"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={"70%"}
          justifyContent={"center"}
        >
          <Text
            fontSize={{
              base: "2rem",
              md: "2rem",
              lg: "3rem",
              xl: "4rem",
              "2xl": "5rem",
            }}
            mb={"1rem"}
            fontWeight={"bold"}
          >
            Highly Curated Offerings
          </Text>
          <Text mb={"1rem"} fontWeight={"semibold"}>
            We partner with top-tier asset managers and venture capital firms to
            bring you investment opportunities normally only available to
            institutions.
          </Text>

          <Box></Box>

          <Box mt={10}>
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
    </>
  );
};

export default Faqs;
