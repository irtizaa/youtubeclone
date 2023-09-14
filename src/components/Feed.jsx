import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SideBar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Category } from "@mui/icons-material";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "auto" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright - 2023
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}>Video</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
