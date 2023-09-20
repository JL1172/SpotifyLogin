import React from "react";


export default function Header(props) {
    return (
        <>
        <div id = 'header'>
            <img id = 'imgSpotify' src = {props.logo.headerLogo}></img>
            <header><h1 id = 'headerH1' style = {{color : props.color.headerColor}}>{props.name.header}</h1></header>
        </div>
        </>
    )
}

