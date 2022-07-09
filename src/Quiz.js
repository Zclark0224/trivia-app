import React from "react"
import Question from "./Question"

export default function Quiz(){
    const [allQuestions, setAllQuestions] = React.useState([])

    let questionElements

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(res => res.json())
            .then(data => {
                setAllQuestions(data.results.map(item => (
                    {question: item.question,
                    options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
                    answer: item.correct_answer
                    } 
                )))
            })
            .catch(err => console.error(err))
    }, [])

    questionElements = allQuestions.map((question, index) => {
        return <Question 
            key={index}
            question={question.question}
            options={question.options}
            answer={question.answer}
        />
    })

    return(
        <div className="quiz">
            {questionElements}
        </div>
    )
}