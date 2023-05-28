import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/app-logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img
          src={Logo}
          alt="app logo"
          style={{ width: "40px", height: "40px" }}
        />
        <Typography variant="h6">
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
