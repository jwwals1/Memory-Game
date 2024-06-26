import { useState, useEffect, Fragment } from "react"
import Card from "./card";
import Score from "./score";

const names = ["snorlax", "pikachu", "rattata", "pidgey", "caterpie", "squirtle", "charmander", "bulbasaur", "eevee", "scyther"]
// eslint-disable-next-line react/prop-types
function Game() {
    const [images, setImages] = useState({})
    const [answers, setAnswers] = useState([])
    const [highScore, setHighScore] = useState(0)

    useEffect(() => {
        names.forEach(async (name) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json()
            const img = data.sprites.front_default
            setImages((prev) => {
                return {...prev, [name]:img}
            });
        });
    }, [])



    const randomizeArray = (array) => {
        const newArray = [];
        const arrayCopy = [...array];

        while (arrayCopy.length > 0) {
            let randomIndex = Math.floor(Math.random() * 10);
            newArray.push(arrayCopy.splice(randomIndex, 1));
        }
        return newArray
    }

    const handleClick = (name) => {
        if (answers.includes(name)) {
            alert(`Game Over! You already picked ${name}`);
            setAnswers([])
        } else setAnswers((prev) => [...prev, name])
    }

    useEffect(() => {
        if (answers.length > highScore) setHighScore(answers.length);
        if (answers.length === names.length) {
            alert("You win");
            setAnswers([])
        }
    }, [answers, highScore])

    let cards = names.map((pokemon) => {
        return (
            <Fragment key={pokemon}>
            <div>
                <Card name={pokemon}
                url={images[pokemon]}
                handleClick={() => {
                    handleClick(pokemon)
                }}/>
            </div>
            </Fragment>
        )
    })
    cards = randomizeArray(cards)
    return (
        <>
        <Score currentScore={answers.length} highScore={highScore}/>
        <div className="game">{cards}</div>
        </>
    )
}




export default Game
