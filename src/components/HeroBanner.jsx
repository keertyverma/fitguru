import { Box, Button, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "215px", xs: "70px" },
        ml: { sm: "50px", xs: "10px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#9d1919" fontWeight="600" fontSize="30px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "45px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Unlock Your Potential <br />
        Embrace the Challenge
      </Typography>
      <Typography fontSize="20px" mb={3}>
        Start your fitness revolution today <br />
        Check out most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        color="error"
        sx={{ backgroundColor: "#9d1919" }}
      >
        Discover Exercises
      </Button>
      <Typography
        fontWeight="600"
        fontSize="200px"
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero banner image"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
