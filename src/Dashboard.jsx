import React from 'react';

const Dashboard = () => {
  const name = localStorage.getItem("username");  // 🔁 Get name from storage

  return (
    <div className="text-center mt-5 mb-5">
      <h1>🎉 Welcome Mr/Mrs. {name}!</h1>
    </div>
  );
};

export default Dashboard;
