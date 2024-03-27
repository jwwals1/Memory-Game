import { useState, useEffect } from "react"
import Card from "./card";
import Score from "./score";

// eslint-disable-next-line react/prop-types
function Game({onClick}) {
    const [answers, setAnswers] = useState([])
    const names = ["1", "2", "3", "4", "5", "6", "7", "8"]
    const [highScore, setHighScore] = useState(0)

    const randomizeArray = (array) => {
        const newArray = [];
        const arrayCopy = [...array];

        while (arrayCopy.length > 0) {
            let randomIndex = Math.floor(Math.random() * 8);
            newArray.push(arrayCopy.splice(randomIndex, 1));
        }
        return newArray
    }

    const handleClick = (name) => {
        if (answers.includes(name)) {
            alert("Game Over! You already picked");
            setAnswers([])
        } else setAnswers((prev) => [...prev, name])
    }

    useEffect(() => {
        if (answers.length > highScore) setHighScore(answers.length);
        if (answers.length === names.length) {
            alert("You win");
            setAnswers([])
        }
    }, [answers])

    let cards = names.map((name) => {
        return (
            <>
            <div key={name}>
                <Card name={name}
                handleClick={() => {
                    handleClick(name)
                }}/>
            </div>
            </>
        )
    })
    cards = randomizeArray(cards)
    return (
        <>
        <Score currentScore={answers.length} highScore={highScore}/>
        <div className="game" onClick={onClick}>{cards}</div>
        </>
    )
    }




export default Game
