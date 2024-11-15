import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/Auth/Login";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import JobDetailPage from "../sections/jobs/JobDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job-detail",
        element: <JobDetailPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
