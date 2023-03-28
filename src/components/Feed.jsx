import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography  className="copyright" variant="body2" sx={{display: { xs: 'none', md: 'block' },visibility:{md:"hidden"} , color: "#fff", }}>
          Copyright © 2022 Incredible Media
        </Typography>
      </Box>

      <Box p={2} sx={{
         overflowY: "auto", height: "90vh", flex: 2 ,
         /* width */
"&::-webkit-scrollbar":{
  width: '10px',
},

/* Track */
"&::-webkit-scrollbar-track" :{
  background: 'black'
},

/* Handle */
"&::-webkit-scrollbar-thumb" :{
  background: "#888"
},
   }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;