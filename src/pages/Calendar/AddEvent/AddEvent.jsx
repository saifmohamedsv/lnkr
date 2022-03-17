import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Modal,
  CircularProgress,
} from "@mui/material";
import { ModalStyle } from "./style";
import { Form, Formik } from "formik";
import InputHandler from "./InputHandler";
import * as Yup from "yup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const Validate = Yup.object({
  title: Yup.string().required(),
  age: Yup.number().required(),
  mobile: Yup.number().required(),
});

const AddEvent = ({ handleClose, open, handleAddEvent, data, slotDate }) => {
  const [date, setDate] = useState(data ? data.start : null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, [data]);
  const initialValues = {
    title: "",
    age: "",
    mobile: "",
    start: "",
    end: "",
  };
  console.log(data, "modalData");
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {loading ? (
        <Box sx={ModalStyle}>
          <Formik
            validationSchema={Validate}
            initialValues={data ? data : initialValues}
            onSubmit={(values) => {
              handleAddEvent({
                ...values,
                start: new Date(date),
                end: new Date(date),
              });
              handleClose();
            }}
          >
            {(formikProps) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <InputHandler
                  name="title"
                  variant="outlined"
                  label="Enter Full Name"
                />
                <InputHandler
                  name="mobile"
                  variant="outlined"
                  label="Mobile Number"
                />{" "}
                <InputHandler name="age" variant="outlined" label="Age" />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Reservation Date"
                    value={data ? data.start : date}
                    onChange={(value) => {
                      setDate(value);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Modal>
  );
};

export default AddEvent;
