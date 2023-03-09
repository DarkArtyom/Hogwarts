import { Routes, Route } from 'react-router-dom';
import { AllStudents } from '../pages/AllStudents';
import { NotFound } from '../pages/NotFound';
import { SignIn } from './Auth/SignIn';
import { SignUp } from './Auth/SignUp';
import { Home } from '../pages/Home';
import { ProtectedRoute } from '../pages/ProtectedRoute';
import { UserAuthContextProvider } from './Auth/UserAuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/GlobalStyles';

export const App = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <>
      <UserAuthContextProvider>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home toggleTheme={toggleTheme} />
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
        </ThemeProvider>
      </UserAuthContextProvider>
      <ToastContainer />
    </>
  );
};
