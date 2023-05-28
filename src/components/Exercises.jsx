import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, selectedBodyPart }) => {
  console.log("exercises = ", exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="45px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
