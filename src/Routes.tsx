import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/layouts/blogs/ReadOneBlog";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:slug" element={<BlogPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
