import { Box } from "@mui/material";
import { useState } from "react";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercise={setExercises}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      />
    </Box>
  );
};

export default Home;
