import React from "react"
import Intro from "./Intro"
import Quiz from "./Quiz"

export default function App(){
    const [gameStart, setGameStart] = React.useState(false)

    function startGame(){
        setGameStart(true)
    }

    return(
        <div className="app">
            {gameStart ? <Quiz /> : <Intro startGame={startGame}/>}
            <svg className="intro--blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" height="400" width="400">
                <path  fill="#BAE6FF" d="M61.8,-21.5C70.7,7.4,62.1,40.6,39.4,57.9C16.7,75.3,-20.2,77,-41.8,60.6C-63.3,44.2,-69.5,9.8,-60,-20C-50.5,-49.7,-25.2,-74.8,0.6,-75C26.4,-75.2,52.8,-50.5,61.8,-21.5Z" transform="translate(100 100)" />
            </svg>
            <svg className="intro--blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" height="400" width="400">
                <path  fill="#FFD6E8" d="M53.8,-40.8C67.3,-26,74,-3.8,66.8,10.1C59.5,24,38.2,29.5,17.7,41.1C-2.8,52.7,-22.6,70.3,-35.6,66.7C-48.6,63.2,-54.9,38.6,-51.2,21.3C-47.5,4,-33.8,-6,-23.6,-20C-13.4,-34,-6.7,-52,6.7,-57.4C20.2,-62.7,40.3,-55.5,53.8,-40.8Z" transform="translate(100 100)" />
            </svg>
            <svg className="intro--blob-3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" height="600" width="600">
                <path fill="#F1C21B" d="M26.1,-44.9C30.4,-37.8,28.3,-24.9,35.6,-14.6C43,-4.3,59.8,3.4,60.7,9.9C61.5,16.4,46.4,21.7,37.4,32.8C28.4,44,25.6,60.9,19.2,60.5C12.9,60,2.8,42.2,-4.1,31.9C-11,21.6,-14.8,18.9,-21.6,16C-28.5,13,-38.4,10,-44.7,3C-51,-4,-53.7,-14.9,-53.6,-28.3C-53.4,-41.7,-50.3,-57.6,-40.9,-62.4C-31.5,-67.2,-15.7,-60.9,-2.4,-57.1C10.9,-53.3,21.7,-52,26.1,-44.9Z" transform="translate(100 100)" />
            </svg>
            <svg className="intro--blob-4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" height="400" width="400">
                <path fill="#A7F0BA" d="M18.2,-21.1C31.3,-19.8,54.9,-27.9,61.1,-24.8C67.4,-21.8,56.1,-7.7,52.2,6.3C48.3,20.3,51.8,34.1,46.6,40.8C41.4,47.4,27.5,46.9,16.4,45.3C5.3,43.7,-3,41.1,-7.7,35.4C-12.4,29.8,-13.4,21.2,-20.8,16.1C-28.1,11,-41.7,9.5,-52,1.5C-62.4,-6.4,-69.6,-20.7,-63.1,-26.2C-56.5,-31.6,-36.2,-28.1,-23.4,-29.6C-10.6,-31,-5.3,-37.4,-1.4,-35.3C2.5,-33.1,5,-22.4,18.2,-21.1Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}