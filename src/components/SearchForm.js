import { Alert, Stack, Typography } from "@mui/material";
import { AlertBanner } from "./AlertBanner";

export const SearchForm = ({ title }) => {
  return (
    <Stack>
      <Typography variant="h2" textAlign="center">
        {title}
      </Typography>

      <AlertBanner message="No repositories found, please try again!" />
    </Stack>
  );
};
