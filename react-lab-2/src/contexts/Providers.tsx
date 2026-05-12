import type { ReactNode } from "react";
import { TodoContextProvider } from "./todos/TodoContextProvider";
import { UserContextProvider } from "./users/UserContextProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <UserContextProvider>
      <TodoContextProvider>{children}</TodoContextProvider>
    </UserContextProvider>
  );
};

export default Providers;
