import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Resume from "../pages/Resume";
import InterviewPrep from "../pages/InterviewPrep";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "jobs", element: <Jobs /> },
      { path: "resume", element: <Resume /> },
      { path: "interview-prep", element: <InterviewPrep /> },
      { path: "profile", element: <Profile /> },
      { path: "login", element: <Login /> },
    ],
  },

  // fallback
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;