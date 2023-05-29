import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/app-logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" px="40px" pt="24px">
        <img
          src={Logo}
          alt="app logo"
          style={{ width: "50px", height: "50px" }}
        />

        <Typography variant="h6" mb="10px">
          Made with 💖 by{" "}
          <a
            href="https://www.linkedin.com/in/keertyverma/"
            className="footer-link"
          >
            Keerty
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
