import { Box } from "@mui/material";
import Detail from "../components/Detail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const ExerciseDetail = ({}) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";

    fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions).then(
      (res) => {
        setExerciseDetail(res.data);
      }
    );
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <p>Exercise Videos</p>
      <p>Similar exercises</p>
    </Box>
  );
};

export default ExerciseDetail;
