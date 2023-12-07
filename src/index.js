import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Root from "./routes/root";
import ErrorPage from './error-page';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Courses from './routes/Courses';
import Profile from './routes/Profile';
import Dashboard from './routes/Dashboard';
import Progress from './routes/Progress';
import Settings from './routes/Settings';
import CourseReact from './routes/CourseReact';
import "@fontsource/poppins";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "courses/",
        element: <Courses />,
      },
      {
        path: "progress/",
        element: <Progress />,
      },
      {
        path: "profile/",
        element: <Profile />,
      },
      {
        path: "settings/",
        element: <Settings />,
      },
      {
        path: "course-react/",
        element: <CourseReact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
