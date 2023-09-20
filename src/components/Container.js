import React from "react";
import { useState } from 'react'


export default function Container() {

    const [data] = useState({
        header: 'Spotify',
        headerLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4ED9UZb11h9zrXdV-2ooO5sGu64n0-auaMEVfoU&s",
        title: 'Log in to Spotify',
        navBar: [{
            id: 'Google',
            text: 'Continue with Google',
            googleIcon: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
        },
        {
            id: 'Facebook',
            text: 'Continue with Facebook',
            faceBookIcon: 'https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Facebook.png'
        },
        {
            id: 'Apple',
            text: 'Continue with Apple',
            appleIcon: 'https://cdn-icons-png.flaticon.com/512/121/121144.png',
        }],
        textForUserNameOrEmail: 'Email or username',
        idForUser: 'Email',
        valueOfTextForUserNameOrEmail: 'Email or username',
        passwordText: 'Password',
        valueOfPasswordText: 'Password',
        idForPassword: 'Password',
        login: 'Log in',
        loginId: 'loginBtn',
        forgotYourPassword: 'Forgot your password?',
        footer: "Don't have an account?",
        footerSecondary: 'Sign up for Spotify',
        containerColor: 'black',
        headerColor: 'White',
        backgroundColor: { background: "linear-gradient(rgb(255 255 255 / 10%) 0%, rgb(0, 0, 0) 100%" },
        rememberMeCheckBox: [{
            rememberMeToggle: 'Remember me',
            id: 'rememberMe',
            type: 'checkbox'
        }]
    }
    )


    return (
        <>
            <div id='container'>
                <h1 id='h1'>{data.title}</h1>
                <div id='buttonDiv'>
                    <MyButton id={data.navBar[0].id} label={data.navBar[0].text} icon={data.navBar[0].googleIcon} />
                    <MyButton id={data.navBar[1].id} label={data.navBar[1].text} icon={data.navBar[1].faceBookIcon} />
                    <MyButton id={data.navBar[2].id} label={data.navBar[2].text} icon={data.navBar[2].appleIcon} />
                    <div id='bottomBorder'></div>
                    <div>
                        <MyInput idVal={data.idForUser} value={data.valueOfTextForUserNameOrEmail}
                            labelText={data.textForUserNameOrEmail} />
                        <MyInput idVal={data.idForPassword} value={data.valueOfPasswordText}
                            labelText={data.passwordText} />
                        <RememberMe idOfButton={data.rememberMeCheckBox[0].id}
                            text={data.rememberMeCheckBox[0].rememberMeToggle}
                            type={data.rememberMeCheckBox[0].type} />
                            <div>
                            <LoginButton loginID = {data.loginId} textOnLogin = {data.login}/>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function MyButton({ id, label, icon }) {
    return (
        <div id={id.toLowerCase()}>
            <img id={id} src={icon}></img>
            <button id={id.toUpperCase(0)}>{label}</button>
        </div>
    )
}


function MyInput({ labelText, value, idVal }) {
    return (
        <div id={idVal.toUpperCase()}>
            <h4 id={idVal} >{labelText}</h4>
            <input id={idVal.toLowerCase()} type={value === "Password" ? 'password' : 'text'} placeholder={value}></input>
        </div>
    )
}

function RememberMe({ text, idOfButton, type }) {
    return (
        <div>
            <div className="checkbox-apple">
                <input className="yep" id="check-apple" type="checkbox" />
                <label htmlFor="check-apple"></label>
                
            </div>
            <h4 id={idOfButton}>{text}</h4>
        </div>
    )
}
function LoginButton({textOnLogin,loginID,loginFunction}) {

    return (
    <div id = {loginID.toLowerCase()}>
        <button onKeyDown = {evt=> {
            console.log(evt)
        }}id = {loginID}>{textOnLogin}</button>
    </div>
    )
}