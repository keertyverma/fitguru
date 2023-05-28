import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";

import "react-horizontal-scrolling-menu/dist/styles.css";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({
  data,
  selectedBodyPart,
  setSelectedBodyPart,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((exercise) => (
        <Box
          key={exercise.id || exercise}
          itemId={exercise.id || exercise} // itemId is required to track items for scrolling
          title={exercise.id || exercise}
          m="30px 40px"
        >
          <BodyPart
            item={exercise}
            selectedBodyPart={selectedBodyPart}
            setSelectedBodyPart={setSelectedBodyPart}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
