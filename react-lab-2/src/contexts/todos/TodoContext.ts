import { createContext } from "react";

export interface Todo {
  id: string;
  todo: string;
}

type TodoContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// export const TodoContext = createContext<TodoContextType>({
//   todos: [],
//   setTodos: () => {},
// });
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);
