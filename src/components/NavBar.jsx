import { Stack } from "@mui/material";
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
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
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
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
          }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default NavBar;
