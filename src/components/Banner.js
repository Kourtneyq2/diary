import { Stack } from "@mui/material";

export const Banner = ({ title, subTitle }) => {
  return (
    <Stack border={1} padding={3} textAlign="center">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </Stack>
  );
};
