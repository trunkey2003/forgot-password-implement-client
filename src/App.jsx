import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Axios from "./api/axios";
import { forgotPasswordLoader, resetPasswordLoader } from "./api";
import ResetPasswordErrorPage from "./pages/ResetPassword/ResetPasswordErrorPage";
import ResetPasswordSuccess from "./pages/ResetPassword/ResetPasswordSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "success" }),
    element: <Navigate to="/forgot-password" />,
  },
  {
    path: "/forgot-password",
    loader: forgotPasswordLoader,
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reset-password",
    loader: resetPasswordLoader,
    element: <ResetPassword />,
    errorElement: <ResetPasswordErrorPage/>
  },

  {
    path: "/reset-password/success",
    loader: () => ({ message: "success" }),
    element: <ResetPasswordSuccess />,
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
