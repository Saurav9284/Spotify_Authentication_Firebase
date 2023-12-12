import React from 'react'

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
                 <a href="#">Use phone number instead.</a>
                 <button>Next</button>
                 <div className='line-container'>
                      <div className='line-segment'></div>
                      <span className='or-text'>or</span>
                      <div className='line-segment'></div>
                </div>

             </div>

        </div> 

      </div>
    );
  }
  

export default Signup
