import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase/Firebase";

const AuthForm = ({ buttonName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app);

    if (buttonName === "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          userCredentials.user.displayName = username;

          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {buttonName === "Sign Up" && (
        <div className="pt-4">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full p-4 text-base rounded-lg outline-none border-2 border-black"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
      )}
      <div className="pt-4">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-4 text-base rounded-lg outline-none border-2 border-black"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="pt-4">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-4 text-base rounded-lg outline-none border-2 border-black"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <div className="pt-4">
        <input
          type="submit"
          value={buttonName}
          className="inline-block cursor-pointer py-4 px-8 w-full sm:w-2/4 md:w-2/5 lg:w-[30%] xl:w-1/5 rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in"
        />
      </div>
    </form>
  );
};

export default AuthForm;
