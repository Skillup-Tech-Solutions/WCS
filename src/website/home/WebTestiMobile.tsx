"use client";

import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../assets/Images/Images";

const testimonials = [
  { image: images.logo },
  { image: images.partnerone },
  { image: images.partnertwo },
  { image: images.logo },
  { image: images.partnerone },
  { image: images.partnertwo },
];

const WebTestiMobile = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 2,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Box
      className="website-container"
      sx={{ py: 6, bgcolor: "#f5f5f5", display: { xs: "block", sm: "none" }  }}
    >
      <Typography
        sx={{
          color: "#555",
          lineHeight: 1.7,
          fontSize: { xs: "1rem", md: "18px" },
          fontFamily: "Regular_M",
          textAlign: "center",
        }}
      >
        Our Partners
      </Typography>

      <Typography
        sx={{
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "Regular_M",
          width: "100%",
          margin: "0px auto !important",
          mb: "30px !important",
          lineHeight: 1.2,
        }}
      >
        We have many partners with outstanding growth.
      </Typography>

      <Box
        sx={{
          "& .slick-track": {
            display: "flex",
            gap: "30px",
            cursor: "pointer",
          },
          "& .slick-list": {
            position: "relative",
            overflow: "hidden",
          },
        }}
      >
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <Box
              key={i}
              sx={{
                p: 3,
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                minHeight: 70,
                mx: 1,
                display: "flex !important",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={t.image}
                alt="Partner Logo"
                style={{
                  width: "100%",
                  height: "35px",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default WebTestiMobile;
