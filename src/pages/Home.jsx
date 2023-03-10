import { useNavigate } from 'react-router';
import { useUserAuth } from '../components/Auth/UserAuthContext';
import { Section } from '../components/Layout/Layout.styled';
import { Layout } from '../components/Layout/Layout';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
import PropTypes from 'prop-types';

export const Home = ({ toggleTheme }) => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
        <Section>
          <AppBar theme={toggleTheme} user={user} logOut={handleLogout} />
          <Layout />
        </Section>
      </header>
      <Outlet />
    </>
  );
};

Home.propTypes = {
  toggleTheme: PropTypes.func,
};
