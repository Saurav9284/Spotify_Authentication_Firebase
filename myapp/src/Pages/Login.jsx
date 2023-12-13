import React from 'react'
import SpotifyLogo from '../Assets/SpotifyLogo.png'
import G from '../Assets/G.png'
import F from '../Assets/F.png'
import A from '../Assets/A.png'
import '../Style/Login.css'

function Login() {
  return (
    
    <div className = "LoginMain">
       <div className='LoginNavbar'>
      <div className='logo'>
          <img src={SpotifyLogo} width={50}/><label>Spotify</label>
    </div>
    </div>
       
     <div className='LoginContainer'>
        <div className='LoginHeading'>
         <h1>Log in to Spotify</h1>
        </div>
      <div>
      <a href="#" class="ButtonGoogle"><span id='logog'><img src={G} width={25} height={24}/></span>Continue with Google</a>
      </div>
      <div>
      <a href="#" class="ButtonGoogle"><span id='logog'><img src={F} width={25} height={24}/></span>Continue with Facebook</a>
      </div>
      <div>
      <a href="#" class="ButtonGoogle"><span id='logog'><img src={A} width={28} height={25}/></span>Continue with Apple</a>
      </div>
      <div>
      <a href="#" class="ButtonGoogle">Continue with phone number</a>
      </div>
      
      <div id='hr'></div>
      <p id='p'>Email or username</p>
      <div className='email'>
      <input type='email' id='username' name='username' placeholder='Email or username'/>
      </div>
      <p id='P'> Password</p>
      <div className='email'>
       <input type="password" id="password" name="password" placeholder='password' />
      </div>
      
      <button>Log In</button>
       
       <div className='Forget'>
        <a href="#">Forgot your Password?</a>
       </div>

       <div id='hr'></div>
       
       <div className='acount'>
            <p ><span id="acount">Don't have an acount? <a href="#"> Sign up for Spotify</a>.</span></p>
        </div >

        <div className='footer'>
             <p id='foot'>This site is protected by reCAPTCHA and the Google Privacy Policy Terms of Service apply.</p>
         </div>

      </div>
    </div>
    
  )
}

export default Login
