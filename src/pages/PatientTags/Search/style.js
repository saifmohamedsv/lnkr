import { styled, TextField } from "@mui/material";

export const SearchContainer = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "600px",
};
export const SearchTitle = {
  fontSize: "24px",
  color: "#111",
  fontWeight: "700",
  textTransform: "capitalize",
};
export const InputField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0c0c0c",
  },
  "& .MuiOutlinedInput-root": {
    width: "260px",
    height: "35px",
    fontSize: "14px",
    "& fieldset": {
      border: "1px solid #D2D2D2",
      borderRadius: "5px",
    },
  },
});
