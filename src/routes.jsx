import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import BlankLayout from "./layouts/BlankLayout";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Logout = lazy(() => import("./pages/Logout"));
import DefaultLayout from "./layouts/DefaultLayout";
import PageLoaderSpinner from "./components/shared/PageLoaderSpinner";
const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoaderSpinner />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<BlankLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
