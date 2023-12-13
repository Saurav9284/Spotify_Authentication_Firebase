import React from 'react'
import SpotifyLogo from '../../Assets/SpotifyLogo.png'
import '../../Styles/signupdeatils.css'

const SignupDetails = () => {
  return (
    <div className='main'>

        <div className='navbar'>
            <div className='logo'>
               <img src={SpotifyLogo} width={50}/><label>Spotify</label>
            </div>
        </div>

        <div className='body'>

            <div className='child'>

                 <div class="colored-line"></div>

                 <div id='nthchild'>

                 <div className='topdiv'>
                   
                   {/* <div className='button'>
                       <img/>
                   </div> */}
                   <div id='step'>
                    <p>Step 2 of 3</p>
                   </div>
                   <div id='massage'>
                    <span>Tell us about yourself</span>
                   </div>
                 </div>


                 <div className='foot'>
                          <p id='footer'>This site is protected by reCAPTCHA and the Google Privacy Policy Terms of Service apply.</p>
                 </div>

                 </div>

            </div>

        </div>

    </div>
  )
}

export default SignupDetails
