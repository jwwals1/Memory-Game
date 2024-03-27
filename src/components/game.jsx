import { useState } from "react"
import Card from "./card";

// eslint-disable-next-line react/prop-types
function Game({onClick}) {
    const [clicks, setClicks] = useState([])
    const names = ["1", "2", "3", "4", "5", "6", "7", "8"]

    const randomizeArray = (array) => {
        const newArray = [];
        const arrayCopy = [...array];

        while (arrayCopy.length > 0) {
            let randomIndex = Math.floor(Math.random() * 8);
            newArray.push(arrayCopy.splice(randomIndex, 1));
        }
        return newArray
    }

    const keepScore = (name) => {
        if (clicks.includes(name)) {
            alert("You lose");
            setClicks([])
        } else setClicks((prev) => [...prev, name])
    }

    let cards = names.map((name) => {
        return (
            <>
            <div key={name}>
                <Card name={name}
                handleClick={() => {
                    keepScore(name)
                }}/>
            </div>
            </>
        )
    })
    cards = randomizeArray(cards)
    return (
        <>
        <div className="game" onClick={onClick}>{cards}</div>
        </>
    )
    }




export default Game
