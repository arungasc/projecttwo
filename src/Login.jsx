import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userInput, setUserInput] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7000/login", {
        userInput,
        pwd
      });

      alert(res.data.message);

      localStorage.setItem("username", res.data.name);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-4 w-50 mx-auto shadow">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input className="form-control mb-2" type="text" placeholder="Email or Phone Number" value={userInput} onChange={(e) => setUserInput(e.target.value)} required />
          <input className="form-control mb-3" type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} required />
          <button className="btn btn-primary w-20" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
