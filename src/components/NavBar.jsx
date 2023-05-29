import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/images/app-logo.png";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
      px="20px"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Stack direction="row" gap="0">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", height: "48px", margin: "0 20px" }}
          />
          <Typography variant="h5" fontWeight="bold">
            FitGuru
          </Typography>
        </Stack>
      </Link>
      <Stack
        direction="row"
        fontSize="24px"
        alignItems="flex-end"
        sx={{ gap: { lg: "40px", xs: "15px" } }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #873e3e",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
