import React from "react"
import Intro from "./Intro"
import Quiz from "./Quiz"

export default function App(){
    const [gameStart, setGameStart] = React.useState(false)

    function startGame(){
        setGameStart(true)
    }

    return(
        <div>
            {gameStart ? <Quiz /> : <Intro startGame={startGame}/>}
            {/* <svg className="intro--blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#BAE6FF" d="M61.8,-21.5C70.7,7.4,62.1,40.6,39.4,57.9C16.7,75.3,-20.2,77,-41.8,60.6C-63.3,44.2,-69.5,9.8,-60,-20C-50.5,-49.7,-25.2,-74.8,0.6,-75C26.4,-75.2,52.8,-50.5,61.8,-21.5Z" transform="translate(100 100)" />
            </svg> */}
            {/* <svg className="intro--blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFD6E8" d="M53.8,-40.8C67.3,-26,74,-3.8,66.8,10.1C59.5,24,38.2,29.5,17.7,41.1C-2.8,52.7,-22.6,70.3,-35.6,66.7C-48.6,63.2,-54.9,38.6,-51.2,21.3C-47.5,4,-33.8,-6,-23.6,-20C-13.4,-34,-6.7,-52,6.7,-57.4C20.2,-62.7,40.3,-55.5,53.8,-40.8Z" transform="translate(100 100)" />
            </svg> */}
        </div>
    )
}