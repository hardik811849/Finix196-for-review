import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import PhoneInput from "react-phone-input-2";

const Letstalk = () => {
  return (
    <div>
      <Flex
        bg={"white"}
        minH="100vh"
        direction="column"
        align="center"
        justify="center"
        padding="20px"
      >
        <Box
          //   maxWidth="600px"
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "50%",
            xl: "50%",
          }}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          shadow="md"
        >
          <Heading as="h2" size="lg" mb={4}>
            General Inquiries
          </Heading>

          <Flex direction="column" gap={4}>
            <FormControl>
              <FormLabel htmlFor="first-name">First name*</FormLabel>

              <Input
                id="first-name"
                placeholder="First name"
                size="md"
                border={"1px solid lightgray"}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="last-name">Last name*</FormLabel>

              <Input
                id="last-name"
                placeholder="Last name"
                size="md"
                border={"1px solid lightgray"}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email*</FormLabel>

              <Input
                id="email"
                placeholder="Email"
                size="md"
                // variant="filled"
                border={"1px solid lightgray"}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="phone-number">Phone number</FormLabel>

              <div style={{ width: "100%" }}>
                <PhoneInput
                  placeholder="Enter your phone number"
                  containerStyle={{ width: "100%" }}
                  inputStyle={{ width: "100%" }}
                  country={"us"}
                  //   value={number}
                  //   onChange={(phone) => setNumber(phone)}
                />
              </div>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="company-name">Company name*</FormLabel>

              <Input
                id="company-name"
                placeholder="Company name"
                size="md"
                border={"1px solid lightgray"}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="job-title">Description</FormLabel>

              <Textarea
                id="description"
                placeholder="Description"
                size="md"
                border={"1px solid lightgray"}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="company-type">Company Type*</FormLabel>

              <CheckboxGroup id="company-type">
                <Box display={"flex"} flexDirection={"column"}>
                  <Checkbox value="Commercial Real Estate">
                    Commercial Real Estate
                  </Checkbox>

                  <Checkbox value="Private Equity">Private Equity</Checkbox>

                  <Checkbox value="Private Credit">Private Credit</Checkbox>

                  <Checkbox value="Infrastructure">Infrastructure</Checkbox>

                  <Checkbox value="Valuation Provider">
                    Valuation Provider
                  </Checkbox>

                  <Checkbox value="Fund Administrator">
                    Fund Administrator
                  </Checkbox>

                  <Checkbox value="Tokenization Platform">
                    Tokenization Platform
                  </Checkbox>

                  <Checkbox value="Alternative Trading System">
                    Alternative Trading System
                  </Checkbox>

                  <Checkbox value="Data Management Tool">
                    Data Management Tool
                  </Checkbox>

                  <Checkbox value="Consultant">Consultant</Checkbox>
                </Box>
              </CheckboxGroup>
            </FormControl>

            <Button
              size="md"
              variant="solid"
              colorScheme="blue"
              width="full"
              mt={4}
            >
              Submit
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Letstalk;
