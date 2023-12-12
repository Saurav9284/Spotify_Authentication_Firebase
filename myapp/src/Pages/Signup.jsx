import React from 'react'
import googlelogo from '../Assets/googlelogo.png'
import faceebook from '../Assets/faceebook.png'
import '../Styles/signup.css'

const Signup = () => {
    return (
      <div className='signupmain'>

         <div className='container'>

             <div className='Heading'>  
                 <h1>Sign up to start listening</h1>
                 <p>Email adress</p>
                 <div className='input'>
                 <input type="email" id="username" name="username" placeholder="name@domain.com"/>
                 </div>
                 <a id="phone"href="#">Use phone number instead.</a>
                 <button>Next</button>
                 <div className='line-container'>
                      <div className='line-segment'></div>
                      <span className='or-text'>or</span>
                      <div className='line-segment'></div>
                </div>

                <div>
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
