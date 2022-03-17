import { styled, TextField } from "@mui/material";

export const ContainerStyle = {
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const InputField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0c0c0c",
    // background: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #D2D2D2",
      borderRadius: "5px",
      padding: "12px 0",
    },
  },
});

export const Searchlabel = {
  fontSize: "24px",
  color: "black",
};

export const TagStyle = {
  width: "100%",
  py: 1,
  bgcolor: "#EBEBEB",
  borderRadius: "5px",
  textAlign: "center",
  fontSize: "12px",
};

export const AddButton = {
  bgcolor: "#0F1BF2",
  color: "#fff",
  borderRadius: "5px",
  width: "270px",
};
