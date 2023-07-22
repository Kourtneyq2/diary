import { Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Link to={"/"}>Home</Link>
      <Link to={"/my-repos"}>My Repos</Link>
    </Stack>
  );
};
