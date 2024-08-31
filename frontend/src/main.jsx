import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
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
import Logout from "./pages/Logout.jsx";
import { AuthProvider } from "./store/auth.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";
import AdminContact from "./pages/AdminContact.jsx";
import AdminRegisteruser from "./pages/Admin-Register-user.jsx";
import AdminFeedback from "./pages/Admin-Feedback.jsx";
import AdminCourses from "./pages/Admin-Courses.jsx";
import Admin from "./pages/Admin.jsx";
import AdminUseredit from "./pages/Admin-User-edit.jsx";

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
        path: "/logout",
        element: <Logout/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "*",
        element: <Error/>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout/>,
    children: [
      {
        path: '/admin',
        element: <Admin/>
      },
      {
        path: "users",
        element: <AdminUsers/>,
      },
      {
        path: "contact",
        element: <AdminContact/>,
      },
      {
        path: "register-users",
        element: <AdminRegisteruser/>,
      },
      {
        path: "feedback",
        element: <AdminFeedback/>,
      },
      {
        path: "courses",
        element: <AdminCourses/>,
      },
      {
        path: "user/edit/:id",
        element: <AdminUseredit/>,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
  </AuthProvider>
);
