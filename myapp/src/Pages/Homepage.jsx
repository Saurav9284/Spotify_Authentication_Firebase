import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup'); // Navigate to the Signup component
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the Login component
  };

  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Homepage;
