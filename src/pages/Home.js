import { Container, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Banner } from "../components/Banner";
import { Repos } from "../components/Repos";
import { SearchForm } from "../components/SearchForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { AlertBanner } from "../components/AlertBanner";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { UseFetch } from "../hooks/UseFetch";

export const Home = () => {
  const { setUrl, error, isLoading, data } = UseFetch();
  const handleSubmit = (username) => {
    setUrl(`https://api.github.com/users/${username}/repos`);
  };

  return (
    <Stack gap={3}>
      <Banner title="Github Diary" subTitle="Sub Title" />
      <SearchForm title="Search Form" handleSubmit={handleSubmit} />
      {error && <AlertBanner message="Oops, something went wrong" />}
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {data?.length === 0 && (
        <AlertBanner message="No repositories found, please try a valid username!" />
      )}

      {data?.length > 0 && <Repos repos={data} />}
    </Stack>
  );
};
