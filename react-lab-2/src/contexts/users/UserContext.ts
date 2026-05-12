import { createContext } from "react";

export interface User {
  id: string;
  username: string;
}

type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);
