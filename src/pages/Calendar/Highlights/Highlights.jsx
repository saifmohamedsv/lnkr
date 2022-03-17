import { Box, Typography } from "@mui/material";
import React from "react";
import { Container, Title, Highlight, HighlightsContainer } from "./style";

const Arr = [
  { label: "Saif" },
  { label: "Mohamed" },
  { label: "Mostafa" },
  { label: "123" },
];
const Highlights = ({ highlights = Arr }) => {
  return (
    <Box sx={Container}>
      <Box>
        <Typography variant="h1" color="initial" sx={Title}>
          Hightlights
        </Typography>
      </Box>
      <Box sx={HighlightsContainer}>
        {highlights.map((high) => (
          <Box sx={Highlight}>
            <Typography variant="body1" color="initial" sx={{ flexGrow: 1 }}>
              {high.label}
            </Typography>
            <Typography variant="body1" color="initial">
              action
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Highlights;
