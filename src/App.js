import { Stack } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
  );
};
