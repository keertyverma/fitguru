import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ name, videos }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Box
      sx={{
        marginTop: { lg: "80px", xs: "20px" },
        marginLeft: { xs: "10px" },
        p: "20px",
      }}
    >
      <Typography
        variant="h3"
        mb="33px"
        sx={{ fontSize: { lg: "40px", xs: "25px" } }}
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", sm: "20px", xs: "0" },
        }}
      >
        {videos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h6" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h7" color="#3d3a3a">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
