import { useState } from "react";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import {FacebookAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPhoneNumber, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(app);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const faceBookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    const phoneSignIn = (phoneNumber) => {
        setLoading(true)
        return signInWithPhoneNumber(auth, phoneNumber)
    
    }

    const logout = () => {
        signOut(auth)
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  const info = {user, loading, googleLogin, faceBookSignIn, phoneSignIn, logout, auth};
    

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (loogedUser) => {
            setUser(loogedUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    },[auth]);
    
    return (
        <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;