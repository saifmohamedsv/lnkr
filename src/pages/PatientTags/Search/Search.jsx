import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { SearchContainer, SearchTitle } from "./style";
import InputHandler from "./InputHandler";
import SearchIcon from "../../../assets/icons/Menu/backup/search.svg";

const Search = () => {
  const { tag } = useParams();

  return (
    <Grid item container xs={12}>
      <Box sx={SearchContainer}>
        <Typography variant="body1" color="initial" sx={SearchTitle}>
          {tag} Patients
        </Typography>
        <Formik initialValues={{ search_term: "" }}>
          {() => (
            <Form>
              <InputHandler
                name="search_term"
                placeholder="Ex: Saif Mohamed"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={SearchIcon} width="18px" />
                    </InputAdornment>
                  ),
                }}
              />
            </Form>
          )}
        </Formik>
      </Box>
    </Grid>
  );
};
export default Search;
