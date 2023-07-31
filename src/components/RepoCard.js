import { Container, Stack, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { getFromLocalStorage } from "../utils/getfromlocalstorage";
export const RepoCard = ({ repo }) => {
  const itemsFromLS = getFromLocalStorage("repos");

  const [addedToLS, setAddedToLS] = useState(
    itemsFromLS.find((itemFromLS) => {
      return itemFromLS.id === repo.id;
    })
  );
  const handleAddToFav = () => {
    const itemsFromLS = getFromLocalStorage("repos");
    const newItems = [repo, ...itemsFromLS];
    localStorage.setItem("repos", JSON.stringify(newItems));
    setAddedToLS(true);
  };

  const handleRemoveFromLS = () => {
    const itemsFromLS = getFromLocalStorage("repos");
    const newItems = itemsFromLS.filter((itemsFromLS) => {
      return itemsFromLS.id !== repo.id;
    });
    localStorage.setItem("repos", JSON.stringify(newItems));

    setAddedToLS(false);
  };
  return (
    <Card className="repo-card-card">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {repo.name}
        </Typography>
        <hr />
        <Typography variant="body2" color="text.secondary">
          {repo.description}
        </Typography>
        <Link href={repo.html_url} target="_blank">
          View in Github
        </Link>
      </CardContent>
      <CardActions>
        {!addedToLS ? (
          <Button
            size="medium"
            variant="contained"
            color="warning"
            onClick={handleAddToFav}
          >
            <i className="fa-solid fa-check"></i>
            Add to favourites
          </Button>
        ) : (
          <Button
            size="medium"
            variant="contained"
            color="error"
            onClick={handleRemoveFromLS}
          >
            <i className="fa-solid fa-check"></i>
            Remove Favourites
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
