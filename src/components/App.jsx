import { Routes, Route } from 'react-router-dom';
import { AllStaff } from '../pages/AllStaff';
import { SlytherinPage } from '../pages/HousesPages/SlytherinPage';
import { GryffindorPage } from '..//pages/HousesPages/GryffindorPage';
import { RavenclawPage } from '..//pages/HousesPages/RavenclawPage';
import { HufflepuffPage } from '..//pages/HousesPages/HufflepuffPage';
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
import { Favorites } from '../pages/Favorites';

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
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home toggleTheme={toggleTheme} />
                </ProtectedRoute>
              }
            >
              <Route
                path="all-staff"
                element={
                  <ProtectedRoute>
                    <AllStaff />
                  </ProtectedRoute>
                }
              />
              <Route
                path="slytherin"
                element={
                  <ProtectedRoute>
                    <SlytherinPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="gryffindor"
                element={
                  <ProtectedRoute>
                    <GryffindorPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="hufflepuff"
                element={
                  <ProtectedRoute>
                    <HufflepuffPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="ravenclaw"
                element={
                  <ProtectedRoute>
                    <RavenclawPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="favorites"
                element={
                  <ProtectedRoute>
                    <Favorites />
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
