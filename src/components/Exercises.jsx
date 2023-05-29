import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const API_URI = "https://exercisedb.p.rapidapi.com/exercises";

const Exercises = ({ exercises, setExercises, selectedBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let uri =
      selectedBodyPart === "all"
        ? API_URI
        : `${API_URI}/bodyPart/${selectedBodyPart}`;

    fetchData(uri, exerciseOptions).then((res) => {
      setExercises(res.data);
    });
  }, [selectedBodyPart]);

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
      <Typography
        variant="h4"
        mb="45px"
        sx={{ fontSize: { lg: "35px", xs: "30px" } }}
      >
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
