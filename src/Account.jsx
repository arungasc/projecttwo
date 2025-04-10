import React, { useState } from 'react';
import axios from 'axios';

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pno, setPno] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7000/post', {
        name, email, pwd, pno
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to create account');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-4 w-50 mx-auto shadow">
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="form-control mb-2" type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} required />
          <input className="form-control mb-3" type="text" placeholder="Phone Number" value={pno} onChange={(e) => setPno(e.target.value)} required />
          <button className="btn btn-success w-30" type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Account;
