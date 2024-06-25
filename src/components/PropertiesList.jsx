import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import { properties } from "./properties";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_properties } from "../Redux/Properties/action";

const PropertiesList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.search);

  const handleDetailProduct = (id) => {
    navigate(`/details-property/${id}`);
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();

  const { isLoading, isError, properties } = useSelector(
    (store) => store.propertyReducer
  );

  const queryParams = new URLSearchParams(location.search);
  const propertyCategory = queryParams.get("category");
  // console.log(propertyCategory);

  useEffect(() => {
    dispatch(get_properties());
  }, [dispatch]);

  // Filter properties based on the selected type
  const filteredProperties = properties.filter((property) => {
    if (!propertyCategory) return true;
    return property.attributes.categories === propertyCategory;
  });

  console.log(filteredProperties);
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
          Properties
        </Text>
      </Box>

      <Box
        w={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "90%",
          "2xl": "90%",
        }}
        m={"auto"}
        mb={"5rem"}
      >
        <Text
          p={{ base: 4, sm: 4, md: 10, lg: 10, xl: 10, "2xl": 10 }}
          fontSize={"4xl"}
          fontWeight={"semibold"}
        >
          Explore Properties
        </Text>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          m={"auto"}
          gap={{
            base: "1rem",
            sm: "1rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
            "2xl": "3rem",
          }}
        >
          {Array.isArray(filteredProperties) &&
            filteredProperties.map((property) => (
              <Box
                onClick={() => handleDetailProduct(property.id)}
                border={"1px solid gray"}
                borderRadius={"12px"}
                p={4}
                key={property.id}
                transition="all 0.3s ease-in-out"
                _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  transform: "scale(1.01)",
                  border: "none",
                }}
              >
                <Box w={"100%"}>
                  <Box w={"100%"} height={"250px"} mb={4}>
                    <Image
                      borderRadius={"12px"}
                      src={property.attributes.Image}
                      alt="Image/property"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Text fontWeight={"bold"} fontSize={"18px"}>
                    {property.attributes.Name}
                  </Text>
                  <Box display={"flex"} gap={2}>
                    <FaLocationDot
                      color="#ff5800"
                      style={{ marginTop: "7px" }}
                    />
                    <Text>{property.attributes.Location}</Text>
                  </Box>
                  <Box
                    borderTop={"1px solid gray"}
                    borderBottom={"1px solid gray"}
                    mt={4}
                    mb={4}
                  >
                    <Text p={5}>
                      Builtup Area : {property.attributes.builtUpArea}
                    </Text>
                  </Box>
                  <Button
                    bg={"#ff5800"}
                    color={"white"}
                    w={"100%"}
                    variant={"unstyled"}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default PropertiesList;
