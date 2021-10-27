import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firbase.Config";

const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuthentication;
