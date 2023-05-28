import { Box } from "@mui/material";
import Detail from "../components/Detail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";

const ExerciseDetail = ({}) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

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
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos name={exerciseDetail.name} videos={exerciseVideos} />
      <p>Similar exercises</p>
    </Box>
  );
};

export default ExerciseDetail;
