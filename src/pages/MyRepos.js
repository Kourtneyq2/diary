import { Container, Stack } from "@mui/material";
import { Banner } from "../components/Banner";
import { AlertBanner } from "../components/AlertBanner";
import { getFromLocalStorage } from "../utils/getfromlocalstorage";
import { Repos } from "../components/Repos";
import { useState } from "react";

export const MyRepos = () => {
  const [repos, setRepos] = useState(getFromLocalStorage("repos"));
  const itemsFromLS = getFromLocalStorage("repos");
  console.log(itemsFromLS);
  return (
    <Stack>
      <Banner
        title="My Repositories"
        subTitle="Here is a list of your saved repositories"
      />

      {itemsFromLS.length <= 0 && (
        <AlertBanner message="You have no saved repositories" />
      )}

      {itemsFromLS.length !== 0 && <Repos repos={repos} setRepos={setRepos} />}
    </Stack>
  );
};
