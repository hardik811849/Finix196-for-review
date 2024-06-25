import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_all_blogs } from "../Redux/Blogs/action";

const BlogsCom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogs } = useSelector((store) => store.blogReducer);

  useEffect(() => {
    dispatch(get_all_blogs());
  }, [dispatch]);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const handleBlogs = (id) => {
    window.scrollTo(0, 0);
    navigate(`/details-blogs/${id}`);
  };

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/blog-list");
  };

  return (
    <Box
      bgGradient="linear(to-r, #020c2b, #041E5B)"
      color={"white"}
      pb={"5rem"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={10}
        mb={10}
        textAlign={"center"}
      >
        <Text
          fontSize={{
            base: "30px",
            sm: "30px",
            md: "44px",
            lg: "44px",
            xl: "44px",
            "2xl": "44px",
          }}
          fontWeight={"semibold"}
        >
          BLOGS{" "}
        </Text>
        {/* <Text
          mt={6}
          fontSize={{
            base: "16px",
            sm: "16px",
            md: "20px",
            lg: "20px",
            xl: "20px",
            "2xl": "20px",
          }}
          w={{
            base: "80%",
            sm: "80%",
            md: "80%",
            lg: "80%",
            xl: "60%",
            "2xl": "47%",
          }}
          fontWeight={"semibold"}
          textAlign={"center"}
        >
          Tokenize Your Assets with Finix196! Unlock Premium Property Value with
          Our Advanced Institutional Tokenization Framework and Property
          Improvement Plan (PIP).{" "}
        </Text> */}
      </Box>

      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        w={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "90%",
          "2xl": "80%",
        }}
        gap={10}
        m={"auto"}
      >
        {Array.isArray(blogs) &&
          blogs.slice(0, 4).map((el) => (
            <Box
              key={el.id}
              onClick={() => handleBlogs(el.id)}
              _hover={{ cursor: "pointer" }}
            >
              {Array.isArray(el.attributes.image.data) &&
                el.attributes.image.data.map((e) => (
                  <Box w={"100%"} height={"250px"} mb={4} key={e.id}>
                    <Image
                      borderRadius={"12px"}
                      src={e.attributes.url}
                      alt="Image/property"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                ))}
              <Text fontWeight={"semibold"} fontSize={"1.6rem"}>
                {el.attributes.Title}
              </Text>
              <Text mt={5}>
                {truncateText(el.attributes.SortDescription, 30)}
              </Text>
            </Box>
          ))}
      </Box>

      <Box display={"flex "} justifyContent={"center"} mt={"2rem"}>
        <Button
          w={{
            base: "90%",
            xsm: "90%",
            sm: "20%",
            md: "15%",
            lg: "10%",
            xl: "10%",
            "2xl": "10%",
          }}
          bg={"#ff5800"}
          color={"white"}
          borderRadius={"full"}
          variant={"unstyled"}
          onClick={handleNavigate}
        >
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default BlogsCom;
