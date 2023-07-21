import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./pages/Home";
import { MyRepos } from "./pages/MyRepos";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myrepos" element={<MyRepos />} />
      <Route path="" element={<NotFound />} />
    </Routes>
  );
};
