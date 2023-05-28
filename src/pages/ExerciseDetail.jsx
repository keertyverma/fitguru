import { Box } from "@mui/material";
import Detail from "../components/Detail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = ({}) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    // Get exercise by id
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
    fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions).then(
      (res) => {
        setExerciseDetail(res.data);
      }
    );

    // Get related youtube videos
    const youtubeDbUrl = "https://youtube-search-and-download.p.rapidapi.com";

    fetchData(
      `${youtubeDbUrl}/search?query=${exerciseDetail.name} exercise`,
      youtubeOptions
    ).then((res) => {
      setExerciseVideos(res.data.contents);
    });

    // Get target muscle exercise data
    fetchData(
      `${exerciseDbUrl}/target/${exerciseDetail.target}`,
      exerciseOptions
    ).then((res) => {
      setTargetMuscleExercises(res.data);
    });

    // Get equipment exercise data
    fetchData(
      `${exerciseDbUrl}/equipment/${exerciseDetail.equipment}`,
      exerciseOptions
    ).then((res) => {
      setEquipmentExercises(res.data);
    });
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos name={exerciseDetail.name} videos={exerciseVideos} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
