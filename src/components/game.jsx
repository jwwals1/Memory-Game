import { useState, useEffect } from "react"
import Card from "./card";
import Score from "./score";

const names = ["milotic", "heracross", "flygon", "starmie", "gyarados", "blastoise", "latios", "tyranitar"]
// eslint-disable-next-line react/prop-types
function Game({onClick}) {
    const [images, setImages] = useState({})
    const [answers, setAnswers] = useState([])
    // const [deckId, setDeckId] = useState(null)
    // const [deckCards, setDeckCards] = useState(null)
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
    // useEffect(() => {
    //     const fetchDeckId = async () => {
    //         const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?count=1`);
    //         const data = await response.json()
    //         setDeckId(data.deck_id);
    //     };
    //     fetchDeckId()
    // }, [])

    // const drawCards = async (deckId) => {
    //     await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?count=8`)
    //     .then((response) => response.json())
    //     .then((response) => {
    //         setDeckCards(response.deckCards)
    //     })
    //     .catch((error) => console.error(error))
    // }

    // useEffect(() => {
    //     if (deckId !== null && deckId !== undefined) {
    //         drawCards(deckId, 8)
    //     }
    // }, [deckId])


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
    }, [answers, highScore])

    let cards = names.map((pokemon) => {
        return (
            <>
            <div key={pokemon}>
                <Card name={pokemon}
                url={images[pokemon]}
                handleClick={() => {
                    handleClick(pokemon)
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
