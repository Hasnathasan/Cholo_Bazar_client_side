import { useState } from "react";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(null);
  const [selectedCart, setSelectedCart] = useState([]);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const faceBookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const phoneSignIn = (phoneNumber) => {
    setLoading(true);
    return signInWithPhoneNumber(auth, phoneNumber);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  const info = {
    user,
    loading,
    googleLogin,
    faceBookSignIn,
    phoneSignIn,
    logout,
    auth,
    filter,
    setFilter,
    selectedCart,
    setSelectedCart
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loogedUser) => {
      setUser(loogedUser);
      console.log(loogedUser);
      const newUser = {
        name: loogedUser?.displayName,
        email: loogedUser?.email,
        date_of_birth: null,
        gender: null,
        phoneNumber: loogedUser?.phoneNumber,
        photoUrl: loogedUser?.photoURL,
      };
      if (loogedUser?.email) {
        fetch(`https://cholo-bazar.vercel.app/eachUser/${loogedUser?.email}`)
          .then((res) => res.json())
          .then(data => {
            if(data.notFound){
                fetch('https://cholo-bazar.vercel.app/users', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            }
            else{
              console.log("user found");
            }
          });
      }
      else if(loogedUser?.phoneNumber){
        console.log("User has Phone Number");
        fetch(`https://cholo-bazar.vercel.app/each-user-by-number/${loogedUser?.phoneNumber}`)
          .then((res) => res.json())
          .then(data => {
            if(data?.notFound){
                fetch('https://cholo-bazar.vercel.app/users', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            }
            else{
              console.log("user found");
            }
          });
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, [auth]);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
