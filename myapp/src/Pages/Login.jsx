import React from 'react'
import SpotifyLogo from '../Assets/SpotifyLogo.png'
import G from '../Assets/G.png'
import F from '../Assets/F.png'
import A from '../Assets/A.png'
import "../Styles/login.css"

function Login() {


    return (
        <div className="loginMain">

            <div className='LoginNavbar'>
                <div className='logo'>
                    <img src={SpotifyLogo} width={50} /><label>Spotify</label>
                </div>
            </div>

            <div className='LoginContainer'>
                <form>
                    <div className='LoginHeading'>
                        <h1>Log in to Spotify</h1>
                    </div>

                    <div className='redirect'>
                        <a href="#" class="ButtonGoogle"><span id='logog'><img src={G} width={25} height={24} /></span>Continue with Google</a>
                    </div>

                    <div className='redirect'>
                        <a href="#" class="ButtonGoogle"><span id='logog'><img src={F} width={25} height={24} /></span>Continue with Facebook</a>
                    </div>

                    <div className='redirect'>
                        <a href="#" class="ButtonGoogle"><span id='logog'><img src={A} width={28} height={25} /></span>Continue with Apple</a>
                    </div>

                    <div className='redirect'>
                        <a href="#" class="ButtonGoogle">Continue with phone </a>
                    </div>

                    <div id='hr'></div>

                    <p>Email or username</p>

                    <div className='input'>
                        <input type='email'
                            id='username'
                            name='username'
                            placeholder='Email or username'
                        />
                    </div>
                    <p> Password</p>
                    <div className='input'>
                        <input type="password"
                            id="password" name="password"
                            placeholder='password'
                        />
                        <div className='redirect'>
                            <button type='submit'>Log In</button>
                        </div>
                    </div>
                </form>


                <div className='Forget'>
                    <a href="#" id='phone'>Forgot your Password?</a>
                </div>

                <div id='hr'></div>

                <div id='parag'>
                   <p ><span class="para">Don't have an acount? <a href="#">Sign up for Spotify</a>.</span></p>
                </div >

                <div className='footer'>
                    <p id='foot'>This site is protected by reCAPTCHA and the Google Privacy Policy Terms of Service apply.</p>
                </div>

            </div>
        </div>

    )
}

export default Login
