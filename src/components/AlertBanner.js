import { Alert, Stack } from "@mui/material";

export const AlertBanner = ({ message }) => {
  return (
    <Stack>
      <Alert severity="error">{message}</Alert>
      <Alert severity="success">Warning!</Alert>
    </Stack>
  );
};
