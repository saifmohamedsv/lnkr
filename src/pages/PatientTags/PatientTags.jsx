import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { ContainerStyle } from "./style";
import Search from "./Search/Search";

const PatientTags = () => {
  return (
    <Box sx={ContainerStyle}>
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <Grid container>
          <Search />
        </Grid>
      </Container>
    </Box>
  );
};

export default PatientTags;
