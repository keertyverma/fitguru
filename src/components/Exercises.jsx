import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, selectedBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPages = 9;

  const indexOfLastExercise = currentPage * exercisesPerPages;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPages;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

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
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPages && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            page={currentPage}
            count={Math.ceil(exercises.length / exercisesPerPages)}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
