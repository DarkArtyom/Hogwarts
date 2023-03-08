import { useNavigate } from "react-router";
import { useUserAuth } from "../components/Auth/UserAuthContext";
import { Section } from "../components/Layout/Layout.styled";
import { Layout } from "../components/Layout/Layout";
import { Outlet } from "react-router-dom";
import { AppBar } from "../components/AppBar/AppBar";
export const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Section>
      <AppBar user={user} logOut={handleLogout} />
      <Layout />
      <Outlet />
    </Section>
  );
};
