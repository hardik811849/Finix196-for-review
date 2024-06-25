import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import newLogo from "../assets/logos/Frame 1618873749.svg";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleScroll = (id) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  const handleMenuItemClick = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      handleScroll(id);
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      handleScroll(location.state.scrollTo);
      // Clear the state after scrolling to prevent re-scrolling on state change
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);
  return (
    <>
      <Box
        display={{
          base: "flex",
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={{
          base: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        }}
        boxShadow={"lg"}
      >
        <Box
          w={{
            base: "50%",
            xsm: "50%",
            sm: "50%",
            md: "30%",
            lg: "12%",
            xl: "15%",
            "2xl": "20%",
          }}
        >
          <Link to={"/"}>
            <Image
              src={newLogo}
              w={{
                base: "100%",
                sm: "50%",
                md: "50%",
                lg: "40%",
                xl: "20%",
                "2xl": "10%",
              }}
              transform={{
                base: "scale(1)",
                sm: "scale(1)",
                md: "scale(1)",
                lg: "scale(3)",
                xl: "scale(4)",
                "2xl": "scale(5)",
              }}
              ml={{
                base: "0",
                sm: "0",
                md: "0",
                lg: "3rem",
                xl: "5rem",
                "2xl": "5rem",
              }}
            />
          </Link>
        </Box>
        <Box
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "28%",
            "2xl": "33%",
          }}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
          gap={{
            base: "2rem",
            sm: "2rem",
            md: "2rem",
            lg: "2rem",
            xl: "5rem",
            "2xl": "7rem",
          }}
          fontWeight={"semibold"}
          ml={{
            base: "0",
            sm: "0",
            md: "0",
            lg: "0",
            xl: "3rem",
            "2xl": "3rem",
          }}
        >
          <Box
            onClick={() => handleMenuItemClick("product-section")}
            _hover={{ cursor: "pointer" }}
          >
            PROTON
          </Box>
          <Box
            onClick={() => handleMenuItemClick("resources")}
            _hover={{ cursor: "pointer" }}
          >
            FAQs
          </Box>
          {/* <ScrollLink
            to="product-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{ cursor: "pointer" }}
            onClick={() => handleMenuItemClick("product-section")}
          >
            PROTON
          </ScrollLink> */}
          {/* <ScrollLink
            to="finix196-team"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "/?scrollTo=finix196-team")}
          >
            TEAM
          </ScrollLink> */}
          {/* <ScrollLink
            to="resources"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{ cursor: "pointer" }}
            onClick={() => handleMenuItemClick("resources")}
          >
            FAQs
          </ScrollLink> */}
        </Box>

        <Box
          display={{ base: "flex", sm: "flex", md: "flex", lg: "flex" }}
          alignItems={"center"}
          gap={5}
        >
          <Box
            display={{ base: "flex", sm: "block", md: "block", lg: "none" }}
            alignItems="center"
            gap={5}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                border={"none"}
                icon={<HamburgerIcon w={"2em"} h={"2em"} />}
                aria-label="Options"
                variant="unstyled"
              />
              <MenuList>
                <MenuItem
                  onClick={() => handleMenuItemClick("product-section")}
                >
                  PROTON
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("resources")}>
                  FAQs
                </MenuItem>
                <MenuItem onClick={() => handleNavigate("/contact-us")}>
                  Contact Us
                </MenuItem>
              </MenuList>
              {/* <MenuList>
                <MenuItem>
                  <ScrollLink
                    to="product-section"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      (window.location.href = "/?scrollTo=product-section")
                    }
                  >
                    PROTON
                  </ScrollLink>
                </MenuItem> */}
              {/* <MenuItem>
                  <ScrollLink
                    to="finix196-team"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      (window.location.href = "/?scrollTo=finix196-team")
                    }
                  >
                    TEAM
                  </ScrollLink>
                </MenuItem> */}
              {/* <MenuItem>
                  <ScrollLink
                    to="resources"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      (window.location.href = "/?scrollTo=resources")
                    }
                  >
                    FAQs
                  </ScrollLink>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleNavigate();
                  }}
                >
                  Contact Us
                </MenuItem>
              </MenuList> */}
            </Menu>
          </Box>
          <Button
            display={{ base: "none", sm: "block", md: "block", lg: "block" }}
            w={{
              base: "10rem",
              sm: "10rem",
              md: "10rem",
              lg: "10rem",
            }}
            rounded={"full"}
            onClick={() => (window.location.href = "/contact-us")}
            bgColor={"#ff5800"}
            color={"white"}
            variant={"unstyled"}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
