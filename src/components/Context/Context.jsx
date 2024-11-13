import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import authentication from '../../Firebse/firebase.config';

// ! Create context
export const authContext = createContext();

const Context = ({children}) => {

    // ? Create state for keep user value
    const [user, setUser] = useState(null);
    // ! Social Login Function
    const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGithub = e => {
    e.preventDefault();
    signInWithPopup(authentication, githubProvider)
    .then( result=> setUser(result));
  }

  const handleGoogleLogin = e => {
    e.preventDefault();
    signInWithPopup(authentication, googleProvider)
    .then( result=> setUser(result) )
  }

  const handleTwitter = e => {
    e.preventDefault();
    signInWithPopup(authentication, twitterProvider)
    .then(result => setUser(result));
  }

  const handleSignUp = (email,password) => {
    createUserWithEmailAndPassword(authentication,email,password)
    .then(result => setUser(result));
  }

  const handleSignIn = (email,password) => {
    signInWithEmailAndPassword(authentication,email,password)
    .then(result => console.log(result.user));
  }


  const handleSignOut = () => {
    signOut(authentication)
    .then( result => console.log(result))
  }
//   @ if we use useEffect it keep the value of user. Otherwise when we reload the browser value will null or undefine.
  useEffect( () => {
    console.log("user state", user);
  },[user]);

useEffect( () => {
    const unSubscribe = onAuthStateChanged(authentication, (currentUser) => {
        setUser(currentUser);
    })
    return ( () =>{
        unSubscribe()
    })
},[])

  const auth = {
    handleGithub,
    handleTwitter,
    handleGoogleLogin,
    user,
    handleSignUp,
    handleSignOut,
    handleSignIn
  }
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
};

export default Context;