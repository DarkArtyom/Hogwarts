import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './UserAuthContext';
import { Container, Section } from '../Layout/Layout.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledButton, StyledInput } from '../../Styles/StyledFormsBtn';
import { WrapForm, Form, Label, Title, Text } from './StyledLog';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      toast('Please, enter your email and password.');
      return;
    }

    try {
      await signUp(email, password);
      navigate('/');
      toast.success('Yoy have successful registered');
    } catch (err) {
      console.log(err.message);
      toast.error('Not valid email or password');
    }
  };
  return (
    <Section>
      <Container>
        <WrapForm>
          <Title>Create a new Magic</Title>
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
            <StyledButton type="submit">Sign Up</StyledButton>
          </Form>
          <Text>
            Already have an account? <Link to="/">Log In</Link>
          </Text>
        </WrapForm>
      </Container>
    </Section>
  );
};
