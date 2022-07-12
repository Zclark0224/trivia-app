import React from "react"
import Question from "./Question"

export default function Quiz(){
    const [allQuestions, setAllQuestions] = React.useState([])
    const [gameOver, setGameOver] = React.useState(false)
    const [gameStatus, setGameStatus] = React.useState("playing")

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(res => res.json())
            .then(data => {
                setGameStatus('playing')
                setAllQuestions(data.results.map(item => (
                    {question: item.question,
                    options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
                    answer: item.correct_answer
                    } 
                )))
            })
            .catch(err => console.error(err))
    }, [gameStatus])

    const questionElements = allQuestions.map((question, index) => {
        return <Question 
            key={index}
            question={question.question}
            options={question.options}
            answer={question.answer}
        />
    })

    function checkAnswers(event){
        event.preventDefault()
        setGameOver(true)
        const optionElements = document.getElementsByName("option")
            for( const eachOption of optionElements ) {  
                    (eachOption.value === "correct" && eachOption.className === "selected") ? 
                        eachOption.className = "correct" :  
                          (eachOption.className === "selected") ? 
                            eachOption.className = "incorrect" : 
                                eachOption.className = "disabled" 
                }                 
    }

    function restartGame(){
        setGameOver(false)
        setGameStatus("score")
        for ( const eachAnswer of document.getElementsByName("option")){
            eachAnswer.className = "unselected"
        }
    }

    return(
        <div className="quiz">
            <form>
                {questionElements}
                {!gameOver &&
                    <button className="btn submitBtn" onClick={(event) => checkAnswers(event)} type="submit">Check answers</button>
                }
            </form>
            {gameOver && 
                <div className="score-container">
                    <h2>You scored {document.getElementsByClassName("correct").length}/5!</h2>
                    <button className="btn restartBtn" onClick={restartGame}>Play again</button>
                </div>
            }
        </div>
    )
}