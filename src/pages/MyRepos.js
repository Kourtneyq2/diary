import { Container, Stack } from "@mui/material";
import { Banner } from "../components/Banner";
import { AlertBanner } from "../components/AlertBanner";

export const MyRepos = () => {
  return (
    <Stack>
      <Banner
        title="My Repositories"
        subTitle="Here is a list of your saved repositories"
      />

      <AlertBanner message="You have no saved repositories" />
    </Stack>
  );
};
