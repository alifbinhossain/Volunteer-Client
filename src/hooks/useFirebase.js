import initializeAuthentication from "../Firebase/Firebase.Init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((err) => console.log(err.message));
  };

  return {
    user,
    signInWithGoogle,
  };
};

export default useFirebase;
