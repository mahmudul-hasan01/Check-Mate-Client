import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Tasks from "../pages/Home/Admin/Tasks";
import User from "../pages/Home/Admin/users/User";
import Feedback from "../pages/Home/Admin/feedbacks/Feedback";
import Subscriptions from "../pages/Home/Admin/Subs/Subscriptions";
import VerifyRoute from "./VerifyRoute";
import Task from "../pages/Home/Employee/Tasks/Task";
import AdminRoute from "./AdminRoute";
import Profile from "../pages/Home/Employee/Profile/Profile";
import Pricing from "../pages/Home/Common/Pricing";
import Calender from "../pages/Home/Employee/Calender/Calender";
import Uploaded from "../pages/Home/Employee/Photo/Uploaded";
import SubscriptionForm from "../pages/Home/Employee/Payment/SubscriptionForm";
import Success from "../pages/Home/Employee/Payment/Success";
import Cancle from "../pages/Home/Employee/Payment/Cancle";
import Reset from "../pages/Reset/Reset";
import Confirm from "../pages/Home/Confirm/Confirm";
import ResetPassword from "../pages/Reset/ResetPassword";
import Homepage from "../pages/Homepage/Homepage";
import Price from "../pages/Homepage/Price";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "tasks",
        element: (
          // <AdminRoute>
            <Tasks />
          // {/* </AdminRoute> */}
        ),
      },
      {
        path: "users",
        element: (
          // <AdminRoute>
            <User />
          // </AdminRoute>
        ),
      },
      {
        path: "feedbacks",
        element: (
          <AdminRoute>
            <Feedback />
          </AdminRoute>
        ),
      },
      {
        path: "subscriptions",
        element: (
          <AdminRoute>
            <Subscriptions />
          </AdminRoute>
        ),
      },
      {
        path: "task",
        element: (
          <PrivateRoute>
            <Task />
          </PrivateRoute>
        ),
      },
      {
        path: "calender",
        element: (
          <PrivateRoute>
            <Calender />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "uploaded",
        element: (
          <PrivateRoute>
            <Uploaded />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/reset", element: <Reset /> },
  { path: "/confirm", element: <Confirm /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/verify/:email", element: <VerifyRoute /> },
  {
    path: "/subscription/:id",
    element: (
      <PrivateRoute>
        <SubscriptionForm />
      </PrivateRoute>
    ),
  },
  { path: "/success", element: <Success /> },
  { path: "/cancel", element: <Cancle /> },
  {
    path: "/price",
    element: (
      <PrivateRoute>
        <Pricing />
      </PrivateRoute>
    ),
  },
  {
    path: "/see-price",
    element: <Price />,
  },
]);
