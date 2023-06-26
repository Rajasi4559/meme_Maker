import React from "react";
import logo from '../images/memeFace.jpg'
import './Header.css'

export default function Header()
{
    return (
        <header className="navbar">
            <img src={logo} alt="laughing face"/>
            <h1>Meme Maker</h1>
        </header>
    )
}