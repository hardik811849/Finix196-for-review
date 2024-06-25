import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_details_blogs } from "../Redux/Blogs/action";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const DetailsBlogs = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, detailsBlogs } = useSelector(
    (store) => store.blogReducer
  );

  useEffect(() => {
    dispatch(get_details_blogs(id));
  }, [dispatch, id]);

  console.log(detailsBlogs);
  if (!detailsBlogs || !detailsBlogs.attributes) {
    return <Text>No blog details available.</Text>;
  }

  // const { Title, SortDescription } = detailsBlogs.attributes;

  return (
    <>
      <Box
        key={detailsBlogs.id}
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
          {detailsBlogs.attributes.Title}
        </Text>
      </Box>

      <Box
        w={{
          base: "80%",
          sm: "80%",
          md: "80%",
          lg: "80%",
          xl: "80%",
          "2xl": "80%",
        }}
        m={"auto"}
        mt={10}
        mb={10}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {detailsBlogs.attributes.Description}
        </ReactMarkdown>
      </Box>
    </>
  );
};

export default DetailsBlogs;
