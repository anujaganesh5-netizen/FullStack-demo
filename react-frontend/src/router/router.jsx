import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Resume from '../pages/Resume';
import InterviewPrep from '../pages/InterviewPrep';
import Profile from '../pages/Profile';

// I have adapted the 'createBrowserRouter' setup to your existing pages!
// Let me know if you also want me to generate the DashboardLayout and Patient/Nurse/OAH pages from your example.

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
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

export default router;
