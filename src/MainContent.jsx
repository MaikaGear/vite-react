import React from "react"
import "./App.css"

export default function MainContent(){
    return (
        <div>
            <h1>Fun facts about react</h1>
            <ul className="list-box">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has over 100K stars on Github</li>
                <li>Is maintained by Facebook/Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}