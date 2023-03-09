import { Container, Section } from '../Layout/Layout.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledButton, StyledInput } from '../../Styles/StyledFormsBtn';
import { WrapForm, Form, Label, Title, Text } from './StyledLog';
import { useUserAuth } from './UserAuthContext';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      toast('Please, enter your email and password.');
      return;
    }

    try {
      await logIn(email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
      toast('Wrong email or password');
    }
  };

  return (
    <Section>
      <Container>
        <WrapForm>
          <Title>Log In for Magic</Title>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">
              <StyledInput
                name="email"
                type="email"
                title="you need enter your email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Label>
            <Label htmlFor="password">
              <StyledInput
                name="password"
                type="password"
                title="you need enter your password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Label>
            <StyledButton type="submit">Let`s make it</StyledButton>
          </Form>
          <Text>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Text>
        </WrapForm>
      </Container>
    </Section>
  );
};
