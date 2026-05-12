import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UseUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error(`UseUser must be used inside the UserContextProvider`);
  }

  return context;
};
