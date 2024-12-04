import { createUserWithEmailAndPassword } from "firebase/auth";
import { Children, createContext, useState } from "react";
import { auth } from "../Firebale/Firebase.init";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const createUser = (email, password) => {
    toast.success("You have successfully create your account");
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
