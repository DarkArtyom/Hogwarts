import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import { Container, Section } from "../Layout/Layout.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast("Please, enter your email and password.");
      return;
    }

    try {
      await signUp(email, password);
      navigate("/singin");
    } catch (err) {
      console.log(err.message);
      toast("Not valid email or password");
    }
  };
  return (
    <Section>
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Create a new Magic</h1>
          <label htmlFor="email">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <div>
          Already have an account? <Link to="/signin">Log In</Link>
        </div>
      </Container>
    </Section>
  );
};
