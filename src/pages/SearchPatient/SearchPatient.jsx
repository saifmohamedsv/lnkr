import { Box, Button, Grid, InputAdornment, Typography } from "@mui/material";
import React from "react";
import { AddButton, ContainerStyle, Searchlabel, TagStyle } from "./style";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputHandler from "./InputHandler";
import SearchIcon from "../../assets/icons/Menu/backup/search.svg";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
const SearchPatient = () => {
  const router = useNavigate();
  const initialValues = {
    search_term: "",
  };
  const Tags = [
    { tag: "Heart", id: "" },
    { tag: "Lungs", id: "" },
    { tag: "Cancer", id: "" },
    { tag: "Ears", id: "" },
    { tag: "Critical", id: "" },
    { tag: "Liver", id: "" },
  ];
  return (
    <Box sx={ContainerStyle}>
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Formik initialValues={initialValues}>
          {(formikProps) => (
            <Form>
              <Grid
                container
                sx={{ maxWidth: "1080px", margin: "auto" }}
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography variant="h1" color="initial" sx={Searchlabel}>
                    Search For Patients
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <InputHandler
                    name="search_term"
                    placeholder="patient name, id, phone number or tags"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <img src={SearchIcon} width="32px" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item container xs={12} spacing={2}>
                  {Tags.map((tag) => (
                    <Grid item lg={2} md={4} xs={6}>
                      <Box
                        sx={TagStyle}
                        onClick={() => {
                          router(`tags/${tag.tag.toLowerCase()}`);
                        }}
                      >
                        <Typography variant="body1" color="initial">
                          {tag.tag}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  sx={{ mt: "7.5%" }}
                >
                  <Button
                    sx={AddButton}
                    variant="contained"
                    startIcon={
                      <AddIcon
                        sx={{
                          fontSize: "24px !important",
                          fontWeight: "700 !important",
                        }}
                      />
                    }
                  >
                    Add New Patient
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SearchPatient;
