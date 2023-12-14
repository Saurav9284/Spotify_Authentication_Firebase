import React, { useEffect } from 'react'
import googlelogo from '../Assets/googlelogo.png'
import faceebook from '../Assets/faceebook.png'
import '../Styles/signup.css'
import SpotifyLogo from '../Assets/SpotifyLogo.png'
import { useState } from 'react'
import {auth,provider } from "../Firebase/firebase"
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import Homepage from './Homepage'

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [value, setValue] = useState('');

  const singnup = (e) => {
     e.preventDefault();
     createUserWithEmailAndPassword(auth , email , password)
     .then((userCredential)=>{
      console.log(userCredential);
     })
     .catch((error)=>{
      console.log(error);
     })
  }

  const handlegoogle = () => {
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email);
        localStorage.setItem("email",data.user.email);
      })
  }

  useEffect(()=>{
      setValue(localStorage.getItem("email"));
  })
  
    return (
      <div className='signupmain'>

         <div className='navbarauth'>
           <div className='logo'>
               <img src={SpotifyLogo} width={50}/><label>Spotify</label>
           </div>
         </div>

         <div className='container'>

             <div className='Heading'>  

             <form onSubmit={singnup}>
                 <h1>Sign up to start listening</h1>

                 <p>Email adress</p>
                <div className='input'>

                 <input type="email"
                      id="username"
                      name="username"
                      placeholder="name@domain.com"
                      value={email} 
                      onChange={(e)=>setEmail(e.target.value)}
                     />
                 </div>

                 <p>Password</p>

                 <div className='input'>

                 <input type="password"
                      id="password" 
                      name="password" 
                      placeholder="Enter your password" 
                      value={password} 
                      onChange={(e)=>setPassword(e.target.value)}
                      />
                 </div>

                 <a id="phone"href="#">Use phone number instead.</a>
                 <button type='submit'>Next</button>
                 </form> 
                 <div className='line-container'>
                      <div className='line-segment'></div>
                      <span className='or-text'>or</span>
                      <div className='line-segment'></div>
                </div>

                <div onClick={handlegoogle}>
                <a href="#" class="ButtonGoogle"><span id='logog'><img src={googlelogo} width={25} height={24}/></span>Sign up with Google</a>
                </div>
                <div>
                <a href="#" class="ButtonGoogle"><span id='logog'><img src={faceebook} width={27} height={27}/></span>Sign up with Facebook</a>
                </div>
                <div className='line-container'>
                      <div className='line-segment'></div>
                      <div className='line-segment'></div>
                </div>
                <div id='parag'>
                   <p ><span class="para">Already have an account? <a href="#">Log in here</a>.</span></p>
                </div >
                <div className='foot'>
                <p id='footer'>This site is protected by reCAPTCHA and the Google Privacy Policy Terms of Service apply.</p>
                </div>
                
                </div>
        </div> 

      </div>
    );
  }
  

export default Signup
