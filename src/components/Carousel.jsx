import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import partner1 from "../assets/partner-logo-1.jpg.svg";
import partner2 from "../assets/partner-logo-2.jpg.svg";
import partner3 from "../assets/partner-logo-3.jpg.svg";
import partner4 from "../assets/partner-logo-4.jpg.svg";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w={"98vw"}>
      <div className="slider-container">
        <Slider {...settings}>
          <Box p={2} w={"1%"}>
            <Image src={partner1} alt="partner1" />
          </Box>
          <Box p={2}>
            <Image src={partner2} alt="partner2" />
          </Box>
          <Box p={2}>
            <Image src={partner3} alt="partner3" />
          </Box>
          <Box p={2}>
            <Image src={partner4} alt="partner4" />
          </Box>
        </Slider>
      </div>
    </Box>
  );
};

export default Carousel;
