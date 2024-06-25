import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_details_properties } from "../Redux/Properties/action";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { isLoading, isError, property } = useSelector(
    (store) => store.propertyReducer
  );

  useEffect(() => {
    dispatch(get_details_properties(id));
  }, [dispatch, id]);

  // console.log(property.attributes.Name);

  if (!property || !property.attributes) {
    return <Text>Property details not available.</Text>;
  }

  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          lg: "repeat(1,1fr)",
          xl: "repeat(3,1fr)",
          "2xl": "repeat(3,1fr)",
        }}
        w={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "90%",
          "2xl": "90%",
        }}
        m={"auto"}
        gap={8}
        mb={10}
      >
        <Box
          mt={9}
          gridColumn={{
            base: "span 1",
            sm: "span 1",
            md: "span 1",
            lg: "span 1",
            xl: "span 2",
            "2xl": "span 2",
          }}
        >
          <Text fontSize="42px" fontWeight="bold" mb={6}>
            {property.attributes.Name}
          </Text>
          <Box w={"100%"} height={"700px"} mb={4}>
            <Image
              borderRadius={"12px"}
              src={property.attributes.Image}
              alt="Image/property"
              objectFit="fill"
              width="100%"
              height="100%"
            />
          </Box>

          <Box>
            <Tabs variant="unstyled">
              <TabList>
                <Tab
                  _selected={{ color: "white", bg: "#ff5800" }}
                  fontWeight={"semibold"}
                  p={"15px 30px"}
                >
                  <IoHomeSharp color="#fff" /> &nbsp; Basic Details
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "#ff5800" }}
                  fontWeight={"semibold"}
                  p={"15px 30px"}
                >
                  Tab 2
                </Tab>
              </TabList>
              <TabPanels mt={4}>
                <TabPanel
                  border={"1px solid lightgray"}
                  borderRadius={"12px"}
                  p={10}
                >
                  <Box
                    display={"grid"}
                    gridTemplateColumns={{
                      base: "repeat(1,1fr)",
                      sm: "repeat(1,1fr)",
                      md: "repeat(1,1fr)",
                      lg: "repeat(2,1fr)",
                      xl: "repeat(2,1fr)",
                      "2xl": "repeat(2,1fr)",
                    }}
                  >
                    <TableContainer>
                      <Table variant="unstyled">
                        <Tbody>
                          <Tr>
                            <Td fontWeight={"semibold"}>Listed By</Td>
                            <Td>{property.attributes.listedby}</Td>
                          </Tr>
                          <Tr>
                            <Td fontWeight={"semibold"}>Asset Type</Td>
                            <Td>{property.attributes.assetType}</Td>
                          </Tr>
                          <Tr>
                            <Td fontWeight={"semibold"}>Property Type</Td>
                            <Td>{property.attributes.properyType}</Td>
                          </Tr>
                          <Tr>
                            <Td fontWeight={"semibold"}>Total No. of Units</Td>
                            <Td>{property.attributes.TotalNoOfUnit}</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>

                    <TableContainer>
                      <Table variant="unstyled">
                        <Tbody>
                          <Tr>
                            <Td fontWeight={"semibold"}>Starting Bid</Td>
                            <Td>{property.attributes.startingBid}</Td>
                          </Tr>
                          <Tr>
                            <Td fontWeight={"semibold"}>
                              Builtup Area (Unit in Sqft)
                            </Td>
                            <Td>{property.attributes.builtUpArea}</Td>
                          </Tr>
                          <Tr>
                            <Td fontWeight={"semibold"}>
                              Lot Size (Unit in Acres)
                            </Td>
                            <Td>{property.attributes.lotSize}</Td>
                          </Tr>
                          <Tr>
                            <Td fontWeight={"semibold"}>Property Built year</Td>
                            <Td>{property.attributes.propertBuiltYear}</Td>
                          </Tr>
                          <Tr>
                            <Td fontWeight={"semibold"}> Interior Access </Td>
                            <Td>{property.attributes.interiorAccess}</Td>
                          </Tr>
                          <Tr>
                            <Td fontWeight={"semibold"}>
                              {" "}
                              Accepts Buyer's Title
                            </Td>
                            <Td>{property.attributes.acceptsBuyersTitle}</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.05176831596!2d-95.7309353141178!3d29.81736469329601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1718609003958!5m2!1sen!2sin"
                      width="100%"
                      height="400"
                      style={{ border: "0" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box mt={10}>
            <Tabs variant="unstyled">
              <TabList>
                <Tab
                  _selected={{ color: "white", bg: "#ff5800" }}
                  fontWeight={"semibold"}
                  p={"15px 30px"}
                >
                  Property Description
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "#ff5800" }}
                  fontWeight={"semibold"}
                  p={"15px 30px"}
                >
                  Tab 2
                </Tab>
              </TabList>
              <TabPanels mt={4}>
                <TabPanel
                  border={"1px solid lightgray"}
                  borderRadius={"12px"}
                  p={10}
                >
                  <Box>
                    <Text>Hotel Highlights:</Text>
                    <Text>
                      Step into a realm of refined opulence, where every detail
                      is meticulously curated to exceed the expectations of the
                      discerning traveler. From the exquisite architecture to
                      the personalized service, this boutique hotel sets the
                      standard for luxury accommodations and bespoke
                      experiences.
                    </Text>
                    <Text>Room Types:</Text>
                    <Text>
                      Choose from an array of sumptuous accommodations, ranging
                      from deluxe suites to executive retreats and family
                      sanctuaries. Each room is a sanctuary of comfort and
                      style, adorned with contemporary amenities, plush
                      furnishings, and captivating vistas.
                    </Text>{" "}
                    <Text>Amenities:</Text>
                    <Text>
                      Indulge your palate at the on-site gourmet restaurant,
                      where culinary mastery meets sensory delight.
                    </Text>
                    <Text>
                      Elevate your spirits at the rooftop bar, offering
                      panoramic city views and handcrafted libations.
                    </Text>
                    <Text>
                      Rejuvenate your body and mind at the state-of-the-art
                      fitness center and tranquil spa oasis.
                    </Text>
                    <Text>
                      Host memorable events and conferences in sophisticated
                      venues designed to inspire and impress.
                    </Text>
                    <Text>Location Advantage:</Text>
                    <Text>
                      Ideally situated in the heart of a dynamic cityscape, the
                      hotel enjoys privileged proximity to renowned attractions,
                      entertainment venues, and corporate hubs. Whether for
                      business or leisure, guests are seamlessly connected to
                      the pulse of urban life, ensuring a memorable and
                      convenient stay.
                    </Text>
                    <Text>Investment Potential:</Text>
                    <Text>
                      Beyond its allure as a premier hospitality destination,
                      this boutique hotel represents a lucrative investment
                      opportunity. With a sterling reputation and robust
                      financial performance, it stands as a testament to
                      enduring profitability and potential for growth in the
                      thriving hospitality sector.
                    </Text>
                    <Text>Online Presence:</Text>
                    <Text>
                      Harnessing the power of digital connectivity, the hotel
                      boasts a commanding online presence, characterized by
                      glowing guest reviews and stellar ratings across various
                      platforms, further cementing its status as a preferred
                      choice among discerning travelers.
                    </Text>
                    <Text>Financial Snapshot:</Text>
                    <Text>Annual revenue: $X,XXX,XXX</Text>
                    <Text>Occupancy rate: XX%</Text>
                    <Text>Average daily rate: $XXX</Text>
                    <Text>Staff Expertise:</Text>
                    <Text>
                      Benefit from a seasoned and dedicated team of hospitality
                      professionals, including proficient management and service
                      personnel committed to delivering unparalleled guest
                      satisfaction and operational excellence.
                    </Text>
                    <Text>Additional Information:</Text>
                    <Text>
                      Full compliance with local hospitality regulations ensures
                      adherence to the highest standards of quality and safety.
                    </Text>
                    <Text>
                      Impeccably furnished rooms and public areas, exuding
                      timeless elegance and sophistication.
                    </Text>
                    <Text>Operational Considerations:</Text>
                    <Text>
                      Prospective buyers are encouraged to review the hotel's
                      current operational model and financial performance to
                      gain insight into its seamless transition and continued
                      success.
                    </Text>
                    <Text>Don't Miss Out:</Text>
                    <Text>
                      Elevate your hospitality portfolio with this exclusive
                      boutique retreat, where every moment is a celebration of
                      refined indulgence and unparalleled service. Schedule a
                      private tour today and immerse yourself in the allure and
                      potential of this prestigious property.
                    </Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                  </Box>
                </TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>

        {/* Second Column: Location and Other Details */}
        <Box>
          {/* <Box
            mt={"4rem"}
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            <Text fontSize="lg" color="gray.600" mb={4}>
              {property.attributes.Location}
            </Text>
            <Text fontSize="md" mb={4}>
              Built-up Area: {property.attributes.builtupArea}
            </Text>
            <Text fontSize="md" mb={4}>
              {property.attributes.description}
            </Text>
          </Box> */}

          <Box boxShadow={"lg"} borderRadius={"12px"} p={4}>
            <Text pb={5} fontSize={"20px"}>
              Reserve Met
            </Text>
            <Divider />

            <Box display={"flex"} justifyContent={"space-between"} pt={4}>
              <Text>Last Bid</Text>
              <Text>₹ 34,78,000</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} pb={4}>
              <Text>Bid Increment Amount</Text>
              <Text>₹ 34,78,000</Text>
            </Box>

            <Divider />

            <Box>
              <Text>Last Bid</Text>
              <Text>₹ 34,78,000</Text>
            </Box>
          </Box>

          <Box boxShadow={"lg"} borderRadius={"12px"} p={4}>
            <form>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter Your Email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone No.</FormLabel>
                <Input placeholder="Enter Your Email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Input placeholder="Please write you query here." />
              </FormControl>
              <FormControl>
                <Input type="submit" value={"Submit"} />
              </FormControl>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
