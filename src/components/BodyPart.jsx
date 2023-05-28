import { Stack, Typography } from "@mui/material";

import GymIcon from "../assets/icons/gym.png";

const BodyPart = ({ item, selectedBodyPart, setSelectedBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodypart-card"
      sx={{
        borderTop: selectedBodyPart === item ? "4px solid #FF2625" : "none",
        background: "#fff",
        width: "270px",
        height: "280px",
        gap: "47px",
        borderBottomLeftRadius: "20px",
        cursor: "pointer",
      }}
      onClick={() => {
        setSelectedBodyPart(item);
        window.scrollTo({ top: 1800, lef: 100, behavior: "smooth" });
      }}
    >
      <img
        src={GymIcon}
        alt="gym icon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
