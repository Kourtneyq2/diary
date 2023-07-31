import { Alert, Stack } from "@mui/material";

export const AlertBanner = ({ message, severity = "warning" }) => {
  return (
    <Stack>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
};
