import React from "react"

export default function Question(props){
    const options = props.options

    let selectedAnswer = false

    const optionsElements = options.map((option, index) => {
        return <button 
                    key={index} 
                    className={selectedAnswer ? "selected" : "option"}
                >
                    {option}
                </button>
    })
    
    return (
        <div className="question-container">
            <h2 className="question">{props.question}</h2>
            <div className="options-container">{optionsElements}</div>
            <hr />
        </div>
    )
}