import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "40px", xs: "30px" }, p: "20px" }}>
      <Typography
        variant="h3"
        mb={2}
        sx={{ fontSize: { lg: "35px", xs: "25px" } }}
      >
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length > 0 ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        variant="h3"
        mb={2}
        sx={{ fontSize: { lg: "35px", xs: "25px" } }}
      >
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length > 0 ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
