import React from "react"

export default function Intro(props) {
    return(
        <div className="intro">
            <div className="intro--container">
                <h1 className="intro--title">Quizzical</h1>
                <h3 className="intro--subtitle">Test your trivia knowledge</h3>
                <button className="intro--startBtn" onClick={props.startGame}>Start quiz</button>
            </div>
        </div>
    )
}