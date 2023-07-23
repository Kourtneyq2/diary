import { Container, Stack } from "@mui/material";
import { Banner } from "../components/Banner";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
  return (
    <Stack gap={3}>
      <Banner title="Github Diary" subTitle="Sub Title" />
      <SearchForm title="Search Form" />
    </Stack>
  );
};
