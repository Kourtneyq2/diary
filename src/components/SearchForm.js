import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { AlertBanner } from "./AlertBanner";
import { Form } from "react-router-dom";
import { FormikContext, useFormik } from "formik";
import * as Yup from "yup";

export const SearchForm = ({ title, handleSubmit }) => {
  const initialValues = {
    username: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Please enter a Github username"),
  });
  const onSubmit = ({ username }) => {
    handleSubmit(username);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Stack>
      <Typography variant="h2" textAlign="center">
        {title}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <Input
            type="text"
            placeholder="Enter github username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <FormHelperText>{formik.errors.username}</FormHelperText>
          )}
          <Button variant="contained" color="success" type="submit">
            Search
          </Button>
        </FormControl>
      </form>
    </Stack>
  );
};
