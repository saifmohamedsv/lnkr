import { styled, TextField } from "@mui/material";

export const ModalStyle = {
  maxWidth: "720px",
  maxHeight: "500px",
  border: "none",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
  borderRadius: "16px",
  p: 4,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
  bgcolor: "#fff",
};

export const InputField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0c0c0c",
    background: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
      borderRadius: "14px",
      boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
    },
  },
});
