import { Routes, Route } from "react-router-dom";
import { AllStudents } from "../pages/AllStudents";

import { NotFound } from "../pages/NotFound";
import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";
import { Home } from "../pages/Home";

import ProtectedRoute from "../pages/ProtectedRoute";
import { UserAuthContextProvider } from "./Auth/UserAuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route
              path="/all-students"
              element={
                <ProtectedRoute>
                  <AllStudents />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserAuthContextProvider>
      <ToastContainer />
    </>
  );
};
