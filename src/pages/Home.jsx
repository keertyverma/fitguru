import { Box } from "@mui/material";
import { useState } from "react";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
      />
    </Box>
  );
};

export default Home;
