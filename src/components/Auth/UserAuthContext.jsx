import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '/src/Services/auth/fireBase';
import CircleLoader from 'react-spinners/CircleLoader';

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isInLs, setIsInLs] = useState(false);
  const [isPending, setIsPending] = useState(true);

  async function logIn(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
  async function signUp(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
  async function logOut() {
    return await signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
      // console.log('Auth', currentuser);
      setUser(currentuser);
      setIsPending(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {isPending ? (
        <CircleLoader
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50% -50%)',
            color: '#085c4b',
          }}
        />
      ) : (
        <userAuthContext.Provider
          value={{ user, logIn, signUp, logOut, isInLs, setIsInLs }}
        >
          {children}
        </userAuthContext.Provider>
      )}
    </>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
