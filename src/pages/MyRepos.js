import { Container, Stack } from "@mui/material";
import { Banner } from "../components/Banner";

export const MyRepos = () => {
  return (
    <Stack>
      <Banner
        title="My Repositories"
        subTitle="Here is a list of your saved repositories"
      />
    </Stack>
  );
};
