import React from "react"

export default function Question(props){
    const [selectedAnswer, setSelectedAnswer] = React.useState()
    const options = props.options

    const optionsElements = options.map((option, index) => {
        return <button 
                    key={index} 
                    className={selectedAnswer === index ? "selected" : "option"}
                    dangerouslySetInnerHTML={{__html: option}}
                    onClick={(event) => selectAnswer(event,index)}
                    name="option"
                    value={ 
                        props.answer === option ?
                        "correct" :
                        "incorrect" 
                        }
                >
                </button>
    })

    function selectAnswer(event, index){
        console.log(event.target.value)
        event.preventDefault()
        if(event.target.className === "option"){
            event.target.className = "selected"
            setSelectedAnswer(index)
        } else {
            event.target.className = "option"
            setSelectedAnswer(index)
        }
    }
    
    return (
        <div className="question-container">
            <p className="question" dangerouslySetInnerHTML={{__html: props.question}}></p>
            <div className="options-container">{optionsElements}</div>
            <hr />
        </div>
    )
}