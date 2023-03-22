import React from "react"
import logo from "./assets/react.svg"
import "./App.css"

export default function Header(){
    return(
        <div className="header-box">
            <div className="header-logo-box">
                <img src={logo}/>
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </div>
    )
}