import { Container, Section } from "../Layout/Layout.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "./UserAuthContext";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast("Please, enter your email and password.");
      return;
    }

    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast("Wrong email or password");
    }
  };

  return (
    <Section>
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Log In for Magic</h1>
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
          <button type="submit">Let`s make it</button>
        </form>
        <div>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </Container>
    </Section>
  );
};

// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useState } from 'react';

// import { useNavigate } from 'react-router-dom';

// export const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const signIn = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     signInWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         console.log(userCredential);
//       })
//       .then(() => navigate('/all-students'))
//       .catch(error => {
//         console.error(error);
//       });
//     form.reset();
//   };

//   return (
//     <Container>
//       <form onSubmit={signIn}>
//         <h1>Log In for Magic</h1>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//         <button type="submit">Let`s make it</button>
//       </form>
//     </Container>
//   );
// };
