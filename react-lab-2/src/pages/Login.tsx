import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [inputValueUsername, setInputValueUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   if (!inputValueUsername.trim()) {
  //     console.log("Make sure the field is not empty!");
  //   }
  // }, [inputValueUsername]);

  return (
    <div>
      <h1>Hi there, what's your name?</h1>
      <label htmlFor="login">
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValueUsername}
          onChange={(e) => setInputValueUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </label>
    </div>
  );
};

export default Login;
