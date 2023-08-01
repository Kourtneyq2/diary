import { Container, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RepoCard } from "./RepoCard";

export const Repos = ({ repos, setRepos }) => {
  console.log(repos);
  return (
    <Container>
      <Stack className="repo-card" direction="horizontal">
        {repos.map((repo) => {
          return <RepoCard repo={repo} setRepos={setRepos} />;
        })}
      </Stack>
    </Container>
  );
};
