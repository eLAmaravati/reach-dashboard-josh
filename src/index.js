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
        path: "profile/",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
