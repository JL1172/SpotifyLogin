import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Container from './Container'


function App() {

  const [data] = useState({
    header: 'Spotify',
    headerLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4ED9UZb11h9zrXdV-2ooO5sGu64n0-auaMEVfoU&s",
    title: 'Log in to Spotify',
    navBar: [{
      text: 'Continue with Google',
      googleIcon: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
    },
    {
      text: 'Continue with Facebook',
      faceBookIcon: 'https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Facebook.png'
    },
    {
      text: 'Continue with Apple',
      appleIcon: 'https://cdn-icons-png.flaticon.com/512/121/121144.png',
    }],
    textForUserNameOrEmail: 'Email or username',
    passwordText: 'Password',
    rememberMeToggle: 'Remember me',
    loginButton: 'Log in',
    forgotYourPassword: 'Forgot your password?',
    footer: "Don't have an account?",
    footerSecondary: 'Sign up for Spotify',
    containerColor: 'black',
    headerColor : 'White',
    backgroundColor: { background: "linear-gradient(rgb(255 255 255 / 10%) 0%, rgb(0, 0, 0) 100%" }
  }
  )

  return (
    <>
      <div style={{ backgroundColor: data.containerColor }}>
        <div>
          <Header name={data} logo={data} color={data} />
        </div>
      </div>
    </>
  )
}
export default App