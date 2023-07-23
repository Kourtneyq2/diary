import { Stack, Typography } from "@mui/material";

export const Banner = ({ title, subTitle }) => {
  return (
    <Stack border={1} padding={3} textAlign="center">
      <Typography variant="h1">{title}</Typography>
      <h2>{subTitle}</h2>
    </Stack>
  );
};
