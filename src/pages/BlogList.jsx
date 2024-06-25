import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_all_blogs } from "../Redux/Blogs/action";

const BlogList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogs } = useSelector((store) => store.blogReducer);

  useEffect(() => {
    dispatch(get_all_blogs());
  }, [dispatch]);

  const handleBlogs = (id) => {
    navigate(`/details-blogs/${id}`);
    window.scrollTo(0, 0);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
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
          Blogs
        </Text>
      </Box>

      <Box
        w={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "80%",
          xl: "80%",
          "2xl": "80%",
        }}
        m={"auto"}
        mb={"5rem"}
      >
        <Text
          p={{ base: 4, sm: 4, md: 10, lg: 10, xl: 10, "2xl": 10 }}
          fontSize={"4xl"}
          fontWeight={"semibold"}
        >
          Explore Blogs
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
          {Array.isArray(blogs) &&
            blogs.map((el) => (
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
      </Box>
    </>
  );
};

export default BlogList;
