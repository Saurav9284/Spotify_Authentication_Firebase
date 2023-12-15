import React from "react";
import { useNavigate } from "react-router-dom";
import SpotifyLogo from "../Assets/SpotifyLogo.png";
import "../Styles/homepage.css"
import { auth , provider} from '../Firebase/firebase'

const Homepage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup"); // Navigate to the Signup component
  };

  const handleLogin = () => {
    navigate("/login"); // Navigate to the Login component
  };


  const user = localStorage.getItem("email");
  console.log(user);

  return (
    <div>
      <div className="navbarauth">
        <div className="logo">
          <img src={SpotifyLogo} width={50} />
          <label>Spotify</label>
        </div>
      </div>
      <div id="childhome">
        <h1 id="homehead">Welcome to HomePage</h1>
        <h3 style={{color:"white"}}>{user}</h3>
        <button onClick={handleSignup}>Signup</button>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Homepage;
