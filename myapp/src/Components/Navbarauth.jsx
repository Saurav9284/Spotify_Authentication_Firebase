import React from 'react'
import SpotifyLogo from '../Assets/SpotifyLogo.png'
import './navbarauth.css'
const Navbarauth = () => {
  return (
    <div className='navbarauth'>
      <div className='logo'>
          <img src={SpotifyLogo} width={50}/><label>Spotify</label>
    </div>
    </div>
  )
}

export default Navbarauth
