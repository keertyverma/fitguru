import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SearchExercises = ({
  setExercises,
  selectedBodyPart,
  setSelectedBodyPart,
}) => {
  const API_URI = "https://exercisedb.p.rapidapi.com/exercises";

  const [searchText, setSearchText] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    fetchData(`${API_URI}/bodyPartList`, exerciseOptions).then((res) => {
      setBodyParts(["all", ...res.data]);
    });
  }, []);

  const handleSearch = () => {
    if (searchText) {
      fetchData(API_URI, exerciseOptions)
        .then((res) => {
          const searchedExercise = res.data.filter(
            (exercise) =>
              exercise.name.toLowerCase().includes(searchText) ||
              exercise.bodyPart.toLowerCase().includes(searchText) ||
              exercise.target.toLowerCase().includes(searchText) ||
              exercise.equipment.toLowerCase().includes(searchText)
          );

          setSearchText("");
          setExercises(searchedExercise);
        })
        .catch((err) => console.log("Error = ", err));
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center" mt="35px" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "45px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Explore and Find the Exercises
      </Typography>
      <Box position="relative" mb="20px">
        <TextField
          sx={{
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "5px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="75px"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            position: "absolute",
            right: 0,
            bgcolor: "#ff2625",
            color: "#fff",
            fontSize: { lg: "20px", xs: "14px" },
            width: { lg: "175px", xs: "80px" },
            height: "55px",
            textTransform: "none",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {bodyParts.length === 0 ? (
          <Loader />
        ) : (
          <HorizontalScrollBar
            data={bodyParts}
            selectedBodyPart={selectedBodyPart}
            setSelectedBodyPart={setSelectedBodyPart}
            isBodyParts
          />
        )}
      </Box>
    </Stack>
  );
};

export default SearchExercises;
