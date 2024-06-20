import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";
import Feedback from "./pages/Feedback.jsx";
import Error from "./pages/Error.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import { AuthProvider } from "./store/auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/course",
        element: <Courses />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/admin",
        element: <Admin/>,
      },
      {
        path: "*",
        element: <Error/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
  </AuthProvider>
);
