import { Container, Stack } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <Stack direction="column" gap={3}>
        <NavigationBar />
        <Container gap={3}>
          <AppRoutes />
        </Container>
      </Stack>
    </BrowserRouter>
  );
};
