import { UseTodo } from "../contexts/todos/UseTodo";
import { UseUser } from "../contexts/users/UseUser";
import { useState } from "react";
import { useNavigate } from "react-router";
// import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [inputValueTodo, setInputValueTodo] = useState<string>("");
  const { todos, setTodos } = UseTodo();
  const { users, setUsers } = UseUser();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (!inputValueTodo.trim()) return;

    setTodos((current) => [
      ...current,
      {
        id: uuidv4(),
        todo: inputValueTodo,
      },
    ]);

    setInputValueTodo("");
  };

  const handleDelete = (id: string) => {
    setTodos((cuurent) => cuurent.filter((i) => i.id !== id));
  };

  const handleLogout = () => {
    setTodos([]);
    navigate("/login");
  };
  return (
    <div>
      <h1>Hi, {}</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <p>{todo.todo}</p>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <label>
        Todo List
        <input
          type="text"
          placeholder="Enter a new task"
          value={inputValueTodo}
          onChange={(e) => setInputValueTodo(e.target.value)}
        />
        <button onClick={() => handleAddTodo()}>Add Todo</button>
      </label>
    </div>
  );
};

export default Home;
