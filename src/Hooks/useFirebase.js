import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import FirebaseAuthentication from '../Firebase/Firebase.init';

FirebaseAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider)
    
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
        setError("")
      }
      setIsLoading(false)
    });
    return () => unsubscribe()
  }, [auth]);

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      }).catch((error) => {
        setError(error.message)
      });
  };

  const handleUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        setError(errorMessage, errorCode)
      })
  };

  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
  };

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      const newUser = { ...user, displayName: name }
      setUser(newUser)
    }).catch((error) => {
      // An error occurred
      // ...
    });

  }

  return {
    handleGoogleSignIn,
    handleUserRegister,
    handleUserLogin,
    SignOut,
    user,
    error,
    setError,
    setUser,
    isLoading,
    setIsLoading,
    updateName,
  }
};

export default useFirebase;