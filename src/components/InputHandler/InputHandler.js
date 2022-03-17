import React from "react";
import { ErrorMessage, useField } from "formik";
import { InputField } from "./style";

const InputHandler = (props) => {
  const [field, meta] = useField(props);
  return (
    <InputField
      error={meta.error && meta.touched}
      {...field}
      {...props}
      autoComplete="off"
      fullWidth
      helperText={<ErrorMessage name={field.name} />}
    />
  );
};

export default InputHandler;
