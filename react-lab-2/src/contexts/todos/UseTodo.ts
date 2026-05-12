import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export const UseTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw Error(`UseTodo must be used inside the TodoContextProvider`);
  }

  return context;
};
