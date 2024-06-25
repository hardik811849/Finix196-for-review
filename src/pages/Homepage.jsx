import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stat,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "react-vertical-timeline-component/style.min.css";
import Properties1 from "../assets/cre.jpg";
import Properties2 from "../assets/hotel.jpg";
import lines from "../assets/lines.svg";
import Properties3 from "../assets/muti-family.jpg";
// import right from "../assets/setting.svg";
import white from "../assets/white_new_right.svg";

import { useEffect, useState } from "react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import albert from "../assets/team-1/Albert_Balderas.png";
import gabi from "../assets/team-1/Gabriela_Balderas.png";
import samir from "../assets/team-1/Samir.png";
import sushim from "../assets/team-1/Sushim.png";
import ashima from "../assets/team-1/ashima_arora.png";
import deepaks from "../assets/team-1/deepak-sharma.png";
import mohan from "../assets/team-1/deepak.png";
import harish from "../assets/team-1/harish-mamtani.png";
import jay from "../assets/team-1/jay-patel.png";
import mayur from "../assets/team-1/mayur_patel.png";
import tp from "../assets/token_process.png";

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { BsTwitterX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { add_emails_news_letter } from "../Redux/NewLetter/action";
import BlogsCom from "../components/BlogsCom";

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

const members = [
  {
    name: "Dr. Jay Patel",
    title: "Founder & CEO",
    image: jay,
    linkedin: "https://www.linkedin.com/in/jay-p-77795910b/",
  },
  {
    name: "Mohan Anem",
    title: "COO",
    image: mohan,
    linkedin: "https://www.linkedin.com/in/mohananem/",
  },
  {
    name: "Deepak Sharma",
    title: "CIO & Strategy",
    image: deepaks,
    linkedin: "https://www.linkedin.com/in/deepak-sharma-4b21a1181/",
  },
  {
    name: "Sushim Shah",
    title: "CFO",
    image: sushim,
    linkedin: "#",
  },
  {
    name: "Samir Thakkar",
    title: "Financial Analyst",
    image: samir,
    linkedin: "https://www.linkedin.com/in/samirthakkar-finance/",
  },
  {
    name: "Ashima Chock",
    title: "Senior Legal Council",
    image: ashima,
    linkedin: "#",
  },
  {
    name: "Harish Mamtani",
    title: "Senior Advisor",
    image: harish,
    linkedin: "#",
  },
  {
    name: "Albert Balderas",
    title: "Operations",
    image: albert,
    linkedin: "https://www.linkedin.com/in/albert-balderas-16b00978/",
  },
  {
    name: "Gabriela Balderas",
    title: "Operations",
    image: gabi,
    linkedin: "https://www.linkedin.com/in/gabriela-balderas-11a796162/",
  },
  {
    name: "Mayur Patel",
    title: "Operations",
    image: mayur,
    linkedin: "https://www.linkedin.com/in/mayur-patel-273746235/",
  },
];

const Homepage = () => {
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

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconStyle = {
    transition: "color 0.3s ease",
  };

  const hoverStyle = {
    color: "#FB8600",
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/faqs");
  };

  const location = useLocation();
  const scrollToSection = new URLSearchParams(location.search).get("scrollTo");

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollToSection) {
      const sectionElement = document.getElementById(scrollToSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [scrollToSection]);

  return (
    <>
      <Box
        bgGradient="linear(to-r, #020c2b, #041E5B)"
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        pb={10}
      >
        {/* Hero */}

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
          <Text
            color={"gray"}
            fontSize={{
              base: "16px",
              md: "16px",
              lg: "16px",
              xl: "16px",
              "2xl": "18px",
            }}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            REAL ESTATE <span>&nbsp;</span> | <span>&nbsp;</span> TOKENIZATION{" "}
            <span>&nbsp;</span> | <span>&nbsp;</span> LIQUIDITY
          </Text>
          <Text
            fontSize={{
              base: "35px",
              md: "40px",
              lg: "44px",
              xl: "64px",
              "2xl": "70px",
            }}
            color={"white"}
            w={{
              base: "80%",
              sm: "80%",
              md: "70%",
              lg: "50%",
              xl: "40%",
              "2xl": "32%",
            }}
            textAlign={"center"}
          >
            Unlocking Liquidity
            <span style={{ color: "#67bafe" }}> & Opportunities </span>
          </Text>
          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            justifyContent={"center"}
            gap={6}
            mt={5}
            w={{
              base: "80%",
              sm: "80%",
              md: "70%",
              lg: "50%",
              xl: "40%",
              "2xl": "40%",
            }}
          >
            {/* <Button
              bg={"white"}
              rounded={"full"}
              border={"2px solid white"}
              onClick={() => (window.location.href = "/lets-talk")}
            >
              LET'S TALK
            </Button> */}
          </Box>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            xsm: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(5,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
          w={{
            base: "80%",
            sm: "80%",
            md: "80%",
            lg: "80%",
            xl: "80%",
            "2xl": "80%",
          }}
          m={"auto"}
          gap={"26px"}
          mb={"30px"}
          mt={{
            base: "4rem",
            sm: "2rem",
            md: "100px",
            lg: "100px",
            xl: "100px",
            "2xl": "7rem",
          }}
          color={"white"}
        >
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"bold"}>
              $2.5 BN
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              DEAL FLOW{" "}
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"bold"}>
              $500 MM
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              ROUND 1 ISSUANCE
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"bold"}>
              5
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              ATS INTEGRATED
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"semibold"}>
              40
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              ECOSYSTEM PARTNERS{" "}
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text
              fontSize={"27px"}
              color={"brand.400"}
              fontWeight={"bold"}
              // mb={"6px"}
            >
              5
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              PROTOCOL INTEGRATIONS
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"bold"}>
              8
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              SUPPORTED CHAINS
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"bold"}>
              3
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              JURISDICTION LICENSES
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"bold"}>
              15
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              REAL ESTATE ASSETS{" "}
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"bold"}>
              50 MM
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              PROTON IN CIRCULATION
            </Text>
          </Box>
          <Box
            p={{
              base: "50px 30px",
              sm: "50px 30px",
              md: "50px 30px",
              lg: "50px 30px",
              xl: "50px 30px",
              "2xl": "50px 30px",
            }}
            textAlign={"center"}
            bgGradient="linear(to-b, #020730, #051344)"
            borderRadius={"10px"}
          >
            <Text fontSize={"27px"} color={"brand.400"} fontWeight={"bold"}>
              8%
            </Text>
            <Text color={"brand.600"} fontSize={"14px"} fontWeight={"semibold"}>
              MINIMUM YIELD
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Invest with us */}

      <Box
        id="product-section"
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
          INVEST WITH US
        </Text>
        <Text
          mt={6}
          fontSize={{
            base: "16px",
            sm: "16px",
            md: "20px",
            lg: "20px",
            xl: "20px",
            "2xl": "20px",
          }}
          fontWeight={"semibold"}
        >
          Explore investment opportunities in Real World Assets Tokenization.
        </Text>
      </Box>

      <Box
        position={"relative"}
        bgImage={`url(${lines})`}
        bgRepeat={"no-repeat"}
        bgSize={"auto"}
        bgPosition={"100%"}
        minH="82vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        m={"auto"}
      >
        <Box
          w={{
            base: "95%",
            sm: "95%",
            md: "85%",
            lg: "75%",
            xl: "55%",
            "2xl": "55%",
          }}
          borderRadius="10px"
          border={"2px solid lightgray"}
          boxShadow={"lg"}
          bg="white"
        >
          <Box bg={"brand.400"} color={"brand.100"} p={4} fontSize={"26px"}>
            <Text fontSize={"50px"}>Proton</Text>
          </Box>
          <Box p={4}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={{
                base: "column",
                xsm: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
                "2xl": "row",
              }}
              gap={2}
            >
              <Box
                display={"flex"}
                flexDirection={{
                  base: "column",
                  xsm: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                  "2xl": "row",
                }}
                gap={2}
              >
                <Button
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "10rem",
                    lg: "10rem",
                    xl: "10rem",
                    "2xl": "10rem",
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={"semibold"}
                  bg="#051344"
                  borderRadius={"full"}
                  variant="unstyled"
                  mb="4"
                  color={"white"}
                >
                  Primary Market
                </Button>
                <Button
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "10rem",
                    lg: "10rem",
                    xl: "10rem",
                    "2xl": "10rem",
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={"semibold"}
                  bg="#051344"
                  borderRadius={"full"}
                  variant="unstyled"
                  mb="4"
                  color={"white"}
                >
                  Real Estate
                </Button>
                <Button
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "10rem",
                    lg: "10rem",
                    xl: "10rem",
                    "2xl": "10rem",
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={"semibold"}
                  bg="#051344"
                  borderRadius={"full"}
                  variant="solid"
                  mb="4"
                  color={"white"}
                >
                  Pre-Launch
                </Button>
              </Box>
              <Box>
                <Button
                  bgColor={"#ff5800"}
                  borderRadius={"full"}
                  variant="unstyled"
                  mb="4"
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "10rem",
                    lg: "10rem",
                    xl: "10rem",
                    "2xl": "10rem",
                  }}
                  fontSize={"18px"}
                  color={"white"}
                  onClick={() => (window.location.href = "/invest")}
                >
                  Invest
                </Button>
              </Box>
            </Box>
            <Text fontSize="lg" fontWeight="bold" color={"#ff5800"} mb="2">
              EXCLUSIVELY ON Finix196
            </Text>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              Proton RWA
            </Text>
            <Text mb="4">
              A groundbreaking holding company specializing in the tokenization
              of Real Estate Assets.
            </Text>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th fontSize={"16px"} fontWeight={"bold"} p={4}>
                    Asset Class
                  </Th>
                  <Th fontSize={"16px"} fontWeight={"bold"} p={4}>
                    Real Estate
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize={"16px"} fontWeight={"bold"} p={4}>
                    Min. Investment
                  </Td>
                  <Td fontSize={"16px"} fontWeight={"bold"} p={4}>
                    $100K
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={"16px"} fontWeight={"bold"} p={4}>
                    Investor Type
                  </Td>
                  <Td fontSize={"16px"} fontWeight={"bold"} p={4}>
                    Qualified Purchaser
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={"16px"} fontWeight={"bold"} p={4}>
                    Redemptions
                  </Td>
                  <Td fontSize={"16px"} fontWeight={"bold"} p={4}>
                    Instant
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>

      {/* PROTON PORTFOLIO ASSETS */}

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
          PROTON PORTFOLIO ASSETS
        </Text>
        <Text
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
        </Text>
      </Box>

      <Box
        mb={"110px"}
        display={"grid"}
        gridTemplateColumns={{
          base: "",
          sm: "",
          md: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
          "2xl": "repeat(3,1fr)",
        }}
        gap={10}
        w={"80%"}
        m={"auto"}
        mt={"80px"}
      >
        <Box
          borderRadius={"10px"}
          bg={"brand.100"}
          boxShadow={"2xl"}
          transition="all 0.3s ease-in-out"
          _hover={{
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            transform: "scale(1.01)",
            border: "none",
          }}
        >
          <Link
            to={"/properties?category=Commercial"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image
              w={"100%"}
              borderTopRadius={"16px"}
              src={Properties1}
              alt="properties"
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              m={"30px"}
            >
              <Stat>
                <StatNumber>Commercial Real Estate</StatNumber>
              </Stat>
            </Box>
          </Link>
        </Box>
        <Box
          borderRadius={"10px"}
          bg={"brand.100"}
          boxShadow={"2xl"}
          transition="all 0.3s ease-in-out"
          _hover={{
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            transform: "scale(1.01)",
            border: "none",
          }}
        >
          <Link
            to={"/properties?category=Hotel"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image
              w={"200rem"}
              borderTopRadius={"16px"}
              src={Properties2}
              alt="properties"
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              m={"30px"}
            >
              <Stat>
                <StatNumber>Hotels</StatNumber>
              </Stat>
            </Box>
          </Link>
        </Box>
        <Box
          gridColumn={{
            base: "",
            sm: "",
            md: "",
            lg: "span 2",
            xl: "span 1",
            "2xl": "span 1",
          }}
          borderRadius={"10px"}
          bg={"brand.100"}
          boxShadow={"2xl"}
          transition="all 0.3s ease-in-out"
          _hover={{
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            transform: "scale(1.01)",
            border: "none",
          }}
        >
          <Link
            to={"/properties?category=Apartment"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image
              w={"100%"}
              borderTopRadius={"16px"}
              src={Properties3}
              alt="properties"
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              m={"30px"}
            >
              <Stat>
                <StatNumber>Multi-Family Appartments</StatNumber>
              </Stat>
            </Box>
          </Link>
        </Box>
      </Box>

      {/* Become a More Effective Data Owner */}
      <Box bgGradient="linear(to-r, #020c2b, #041E5B)" color={"#fff"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          mt={10}
          textAlign={"center"}
        >
          <Text
            color={"#67bafe"}
            fontSize={{
              base: "25px",
              sm: "25px",
              md: "44px",
              lg: "44px",
              xl: "44px",
              "2xl": "44px",
            }}
            fontWeight={"semibold"}
            mt={10}
            mb={6}
          >
            EMBRACE THE DIGITAL REVOLUTION
          </Text>
          <Text
            fontSize={{
              base: "16px",
              sm: "16px",
              md: "20px",
              lg: "20px",
              xl: "20px",
              "2xl": "20px",
            }}
            fontWeight={"semibold"}
            marginBottom={"60px"}
          >
            Manage your Investment Portfolio and enhance its Performance.
          </Text>
        </Box>

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
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "80%",
            xl: "80%",
            "2xl": "80%",
          }}
          m={"auto"}
          gap={6}
          pb={10}
        >
          <Box border={"2px solid #67bafe"} borderRadius={"2rem"} p={10}>
            <Image
              src={white}
              w={{
                base: "12%",
                xsm: "12%",
                sm: "6%",
                md: "6%",
                lg: "6%",
                xl: "6%",
                "2xl": "6%",
              }}
            />
            <Text color={"#67bafe"} fontSize={"30px"} mb={4}>
              Interoperability{" "}
            </Text>
            <Text mb={4} fontWeight={"semibold"}>
              Our platform seamlessly connects real-world assets with blockchain
              technology to enable efficient and secure tokenization.
            </Text>
          </Box>
          <Box border={"2px solid #67bafe"} borderRadius={"2rem"} p={10}>
            <Image
              src={white}
              w={{
                base: "12%",
                xsm: "12%",
                sm: "6%",
                md: "6%",
                lg: "6%",
                xl: "6%",
                "2xl": "6%",
              }}
            />
            <Text color={"#67bafe"} fontSize={"30px"} mb={4}>
              Liquidity{" "}
            </Text>
            <Text mb={4} fontWeight={"semibold"}>
              Our unparalleled network and technology enable asset owners to
              securitize their real estate assets into highly tradable tokens,
              providing new avenues for liquidity.
            </Text>
          </Box>
          <Box border={"2px solid #67bafe"} borderRadius={"2rem"} p={10}>
            <Image
              src={white}
              w={{
                base: "12%",
                xsm: "12%",
                sm: "6%",
                md: "6%",
                lg: "6%",
                xl: "6%",
                "2xl": "6%",
              }}
            />
            <Text color={"#67bafe"} fontSize={"30px"} mb={4}>
              Real Estate Tokenization{" "}
            </Text>
            <Text mb={4} fontWeight={"semibold"}>
              We specialize in tokenizing real estate assets, opening doors for
              fractional ownership and broader investor participation.
            </Text>
          </Box>
          <Box border={"2px solid #67bafe"} borderRadius={"2rem"} p={10}>
            <Image
              src={white}
              w={{
                base: "12%",
                xsm: "12%",
                sm: "6%",
                md: "6%",
                lg: "6%",
                xl: "6%",
                "2xl": "6%",
              }}
            />
            <Text color={"#67bafe"} fontSize={"30px"} mb={4}>
              Yield Generation
            </Text>
            <Text fontWeight={"semibold"}>
              Invest in income-producing assets with a proven track record,
              generating a minimum 8% yield.
            </Text>
          </Box>
        </Box>

        {/* <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(1, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gridTemplateRows={{
            base: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "80%",
            xl: "80%",
            "2xl": "80%",
          }}
          m="auto"
          gap={6}
          pb={10}
        >
          <Box
            gridColumn={{
              base: "3",
              md: "3",
              lg: "1 / 2",
              xl: "1 / 2",
            }}
            gridRow={{
              base: "1",
              md: "1",
              lg: "1 / 2",
              xl: "1 / 2",
            }}
            border="2px solid #67bafe"
            borderBottomRightRadius="2rem"
            p={10}
            position="relative"
          >
            <Box className={styles.box1} />
            <Image src={white} w="10%" />
            <Text color="#67bafe" fontSize="30px" mb={4}>
              Interoperability
            </Text>
            <Text mb={4}>
              Our platform seamlessly connects real-world assets with blockchain
              technology to enable efficient and secure tokenization.
            </Text>
          </Box>

          <Box
            gridColumn={{
              base: "3",
              md: "3",
              lg: "3/4",
              xl: "3/4",
            }}
            gridRow={{
              base: "1",
              md: "1",
              lg: "1 / 2",
              xl: "1 / 2",
            }}
            border="2px solid #67bafe"
            borderBottomLeftRadius="2rem"
            p={10}
            position="relative"
          >
            <Box className={styles.box2} />
            <Image src={white} w="10%" />
            <Text color="#67bafe" fontSize="30px" mb={4}>
              Liquidity
            </Text>
            <Text mb={4}>
              Our unparalleled network and technology enable asset owners to
              securitize their real estate assets into highly tradable tokens,
              providing new avenues for liquidity.
            </Text>
          </Box>

          <Box
            gridColumn={{
              base: "0",
              md: "0",
              lg: "2/3",
              xl: "2/3",
            }}
            gridRow="2 / 3"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
            justifyContent="center"
            alignItems="center"
            position={"relative"}
            zIndex={1}
          >
            <Image
              w={"10%"}
              transform={{
                base: "scale(14)",
                sm: "scale(14)",
                md: "scale(14)",
                lg: "scale(20)",
                xl: "scale(17)",
                "2xl": "scale(14)",
              }}
              src={whatwe}
              alt="Central Image"
              position={"absolute"}
              zIndex={111111111111}
            />
            <Box
              position={"absolute"}
              display={"grid"}
              placeItems={"right"}
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "41rem",
                xl: "45rem",
                "2xl": "47.2rem",
              }}
              h={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "41rem",
                xl: "45rem",
                "2xl": "47.2rem",
              }}
              borderRight={"none"}
              borderLeft={"none"}
              border={"2px solid #0a1b45"}
              className={`${styles.top_left} ${styles.one}`}
              overflow="hidden"
              bgGradient="linear(to-r, #031239, #041748)"
              clipPath={"circle(57.8% at 50% 50%)"}
            ></Box>
          </Box>

          <Box
            gridColumn={{
              base: "3",
              md: "3",
              lg: "1 / 2",
              xl: "1 / 2",
            }}
            gridRow={{
              base: "3",
              md: "3",
              lg: "2 / 3",
              xl: "2 / 3",
            }}
            border="2px solid #67bafe"
            borderTopRightRadius="2rem"
            p={10}
            position="relative"
            zIndex={0}
          >
            <Box className={styles.box3} />
            <Image src={white} w="10%" />
            <Text color="#67bafe" fontSize="30px" mb={4}>
              Real Estate Tokenization
            </Text>
            <Text mb={4}>
              We specialize in tokenizing real estate assets, opening doors for
              fractional ownership and broader investor participation.
            </Text>
          </Box>

          <Box
            gridColumn={{
              base: "3",
              md: "3",
              lg: "3/4",
              xl: "3/4",
            }}
            gridRow={{
              base: "3",
              md: "3",
              lg: "3/4",
              xl: "3/4",
            }}
            border="2px solid #67bafe"
            borderTopLeftRadius="2rem"
            p={10}
            position="relative"
            zIndex={0}
          >
            <Box className={styles.box4} />
            <Image src={white} w="10%" />
            <Text color="#67bafe" fontSize="30px" mb={4}>
              Yield Generation
            </Text>
            <Text>
              Invest in income-producing assets with a proven track record,
              generating a minimum 8% yield.
            </Text>
          </Box>
        </Box> */}
      </Box>

      {/* Tockanization Process */}

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={10}
        mb={10}
        textAlign={"center"}
        p={{
          base: 4,
          sm: 4,
          md: 10,
          lg: 10,
          xl: 10,
          "2xl": 10,
        }}
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
          fontWeight={"bold"}
        >
          TOKENIZATION PROCESS
        </Text>

        <Image src={tp} w={"95%"} mt={10} />
      </Box>

      {/* Grow With Us  */}

      <Box
        bgGradient="linear(to-r, #020c2b, #041E5B)"
        p={{
          base: 4,
          sm: 4,
          md: 10,
          lg: 10,
          xl: 10,
          "2xl": 10,
        }}
        color={"white"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            mb={7}
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
            GROW WITH US
          </Text>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(4,1fr)",
            sm: "repeat(4,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(4,1fr)",
          }}
          gap={8}
          w={{
            base: "100%",
            sm: "100%",
            md: "90%",
            lg: "80%",
            xl: "80%",
            "2xl": "83%",
          }}
          m={"auto"}
        >
          <Box
            gridColumn={{
              base: "span 4",
              sm: "span 4",
              md: "span 4",
              lg: "span 2",
              xl: "span 2",
              "2xl": "span 2",
            }}
            border={"2px solid #67bafe"}
            borderRadius={"2rem"}
            p={10}
          >
            <Image
              src={white}
              w={{
                base: "15%",
                xsm: "15%",
                sm: "6%",
                md: "6%",
                lg: "6%",
                xl: "6%",
                "2xl": "6%",
              }}
              display={"flex"}
              alignItems={"end"}
            />
            <Text
              fontSize={{
                base: "24px",
                sm: "24px",
                md: "30px",
                lg: "30px",
                xl: "30px",
                "2xl": "30px",
              }}
              mb={4}
            >
              Real Estate Investment Diversification{" "}
            </Text>
            <Text
              mb={4}
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "18px",
                lg: "18px",
                xl: "18px",
                "2xl": "18px",
              }}
            >
              Finix196 offers tokenized commercial real estate (CRE),
              multi-family properties, and hotels, allowing investors to
              purchase fractional ownership in high-value assets.
            </Text>
          </Box>
          <Box
            gridColumn={{
              base: "span 4",
              sm: "span 4",
              md: "span 4",
              lg: "span 2",
              xl: "span 2",
              "2xl": "span 2",
            }}
            border={"2px solid #67bafe"}
            borderRadius={"2rem"}
            p={10}
          >
            <Image
              src={white}
              w={{
                base: "15%",
                xsm: "15%",
                sm: "6%",
                md: "6%",
                lg: "6%",
                xl: "6%",
                "2xl": "6%",
              }}
            />
            <Text
              fontSize={{
                base: "24px",
                sm: "24px",
                md: "30px",
                lg: "30px",
                xl: "30px",
                "2xl": "30px",
              }}
              mb={4}
            >
              Enhancing Liquidity for Asset Owners
            </Text>
            <Text
              mb={4}
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "18px",
                lg: "18px",
                xl: "18px",
                "2xl": "18px",
              }}
            >
              Finix196 enables the tokenization of real estate, allowing owners
              to convert their assets into tradable tokens and access new
              liquidity channels.
            </Text>
          </Box>
          <Box
            gridColumn={{
              base: "span 4",
              sm: "span 4",
              md: "span 4",
              lg: "span 2",
              xl: "span 2",
              "2xl": "span 2",
            }}
            border={"2px solid #67bafe"}
            borderRadius={"2rem"}
            p={10}
          >
            <Image
              src={white}
              w={{
                base: "15%",
                xsm: "15%",
                sm: "6%",
                md: "6%",
                lg: "6%",
                xl: "6%",
                "2xl": "6%",
              }}
            />
            <Text
              fontSize={{
                base: "24px",
                sm: "24px",
                md: "30px",
                lg: "30px",
                xl: "30px",
                "2xl": "30px",
              }}
              mb={4}
            >
              Yield Generation for Income-Focused Investors
            </Text>
            <Text
              mb={4}
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "18px",
                lg: "18px",
                xl: "18px",
                "2xl": "18px",
              }}
            >
              Finix196 provides access to tokenized income-producing assets with
              a minimum 8% yield, offering a reliable return on investment.
            </Text>
          </Box>
          <Box
            gridColumn={{
              base: "span 4",
              sm: "span 4",
              md: "span 4",
              lg: "span 2",
              xl: "span 2",
              "2xl": "span 2",
            }}
            border={"2px solid #67bafe"}
            borderRadius={"2rem"}
            p={10}
          >
            <Image
              src={white}
              w={{
                base: "15%",
                xsm: "15%",
                sm: "6%",
                md: "6%",
                lg: "6%",
                xl: "6%",
                "2xl": "6%",
              }}
            />
            <Text
              fontSize={{
                base: "24px",
                sm: "24px",
                md: "30px",
                lg: "30px",
                xl: "30px",
                "2xl": "30px",
              }}
              mb={4}
            >
              Real-Time Asset Performance Monitoring
            </Text>
            <Text
              mb={4}
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "18px",
                lg: "18px",
                xl: "18px",
                "2xl": "18px",
              }}
            >
              Finix196 provides real-time access to asset performance data
              through its platform, enabling investors to make informed
              decisions.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Our Team */}
      {/* <Box
        
        pb={"5rem"}
        id="finix196-team"
      >
        <Box
          m={"auto"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          mb={"100px"}
        >
          <Text fontSize={"44px"} mb={6} mt={6} fontWeight={"bold"}>
            OUR TEAM
          </Text>
          <Text
            w={{ base: "90%", md: "80%", lg: "90%", xl: "70%", "2xl": "38%" }}
            textAlign={"center"}
            fontWeight={"semibold"}
          >
            Industry Leaders with combined 100+ Year's Experience.
          </Text>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            xsm: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(5,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
          w={"80%"}
          m={"auto"}
          rowGap={8}
        >
          {members.map((member, index) => (
            <Box key={index} w={"90%"}>
              <Link to={member.linkedin} target="_blank" style={{}}>
                <Box
                  w="100%"
                  boxShadow="md"
                  _hover={{
                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.7)",
                  }}
                  transition="box-shadow 0.3s ease-in-out"
                >
                  <Image src={member.image} alt={member.name} w="100%" />
                </Box>
              </Link>
              <Box
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Text>{member.title}</Text>
                <Text fontWeight={"bold"}>{member.name}</Text>
                <Link to={member.linkedin} target="_blank">
                  <FaLinkedinIn
                    style={
                      hoveredIcon === index
                        ? { ...iconStyle, ...hoverStyle }
                        : iconStyle
                    }
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  />
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box> */}

      {/* FAQs */}
      <Box id="resources" pb={"5rem"}>
        <Box
          m={"auto"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          mb={"100px"}
        >
          <Text fontSize={"44px"} mt={6} fontWeight={"semibold"}>
            FAQs
          </Text>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            xsm: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(1,1fr)",
            xl: "repeat(1,1fr)",
            "2xl": "repeat(2,1fr)",
          }}
          w={{
            base: "90%",
            xsm: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "90%",
            "2xl": "90%",
          }}
          m={"auto"}
          gap={{
            base: "0rem",
            xsm: "0rem",
            sm: "0rem",
            md: "0rem",
            lg: "0rem",
            xl: "0rem",
            "2xl": "1.5rem",
          }}
        >
          <Box>
            <Accordion defaultIndex={[]} allowMultiple gap={"2rem"}>
              <AccordionItem
                p={3}
                mb={{
                  base: "1rem",
                  xsm: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "1rem",
                  xl: "1rem",
                  "2xl": "1.5rem",
                }}
                border={"2px solid #020c2b"}
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
                      Who can invest in Finix196 tokenized assets?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Finix196 welcomes both Accredited and Institutional investors,
                  depending on the specific investment opportunities and
                  regulatory requirements. Our platform ensures compliance with
                  all relevant regulations to provide secure and transparent
                  investment options.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                p={3}
                mb={{
                  base: "1rem",
                  xsm: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "1rem",
                  xl: "1rem",
                  "2xl": "1rem",
                }}
                border={"2px solid #020c2b"}
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
                      What is the typical minimum investment for offerings on
                      Finix196?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  The minimum investment amount varies depending on the specific
                  offering. Typically, investments start at $10,000, but it can
                  vary based on the asset and the terms of the tokenization.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box>
            <Accordion defaultIndex={[]} allowMultiple gap={"2rem"}>
              <AccordionItem
                p={3}
                mb={{
                  base: "1rem",
                  xsm: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "1rem",
                  xl: "1rem",
                  "2xl": "1.5rem",
                }}
                border={"2px solid #020c2b"}
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
                      What is the typical lock-up period for investment
                      opportunities on Finix196?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lock-up periods can vary depending on the specific investment
                  and asset class. Typically, the lock-up period ranges from 6
                  months to 2 years. Detailed information is provided for each
                  investment opportunity on our platform.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                p={3}
                mb={{
                  base: "1rem",
                  xsm: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "1rem",
                  xl: "1rem",
                  "2xl": "1rem",
                }}
                border={"2px solid #020c2b"}
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
                      What is an accredited investor (AI)?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  An accredited investor is an individual or entity that meets
                  certain financial criteria defined by the SEC. This includes
                  having a net worth of over $1 million, excluding primary
                  residence, or an annual income of over $200,000 for
                  individuals or $300,000 for couples for the last two years.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
        <Box display={"flex "} justifyContent={"center"} mt={5}>
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
      {/* Timeline */}

      {/* <Box bg={"#05256e"} mt={{ base: "10rem", sm: "10rem", md: "8rem" }}>
        <Box
          id="finix196-team"
          m={"auto"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          mb={"100px"}
        >
          <Text fontSize={"40px"} fontWeight={"semibold"} color={"white"}>
            ROADMAP
          </Text>
        </Box>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2017 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            className="vertical-timeline-element--work"
            date="2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            className="vertical-timeline-element--education"
            date="2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            className="vertical-timeline-element--education"
            date="2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            className="vertical-timeline-element--education"
            date="2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            className="vertical-timeline-element--education"
            date="2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Box> */}

      {/* BLOGS */}
      <BlogsCom />

      {/* NEWS LEETTER */}

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
            Finix196 Monthly Newsletter: Stay Updated on RWA Tokenization and
            Real Estate Trends.
          </Text>
          <Text fontSize={"14px"}>
            <span style={{ color: "#FB8600", marginTop: "3px" }}>
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
          <Link
            to={"https://www.linkedin.com/company/finix196/"}
            target="_blank"
          >
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
    </>
  );
};

export default Homepage;
