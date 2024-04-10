import { createContext, useEffect, useState } from "react"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  const auth = getAuth(app);

  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  // create user with email & password
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in existing users
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Login Using Google 
  const googleLoggedIn = () => {
    return signInWithPopup(auth, googleAuthProvider)
  }


  //Login using Github
  const githubLoggedIn = () => {
    return signInWithPopup(auth, githubAuthProvider)
  }


  // Update Profile 
  const updateUserProfile = () => {
    return updateProfile(auth.currentUser)
  }
 


  // Logout User
  const loggedOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [auth]);

  const AuthInfo = {
    user,
    createUser,
    loginUser,
    loggedOutUser,
    loader,
    googleLoggedIn,
    githubLoggedIn,
    updateUserProfile,
    setUser,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider