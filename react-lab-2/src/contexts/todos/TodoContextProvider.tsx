import { useState, type ReactNode } from "react";
import { TodoContext, type Todo } from "./TodoContext";

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
