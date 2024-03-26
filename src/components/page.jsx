import { useState } from "react";
// import Cards from "./cards";
import Score from "./score";
import Game from "./game"

export default function Page() {
    const [currentScore, setCurrentScore] = useState(0)

    const handleCurrentScore = () => {
        const newScore = currentScore + 1
        setCurrentScore(newScore)
    }

    // function getRandomNumber() {
    //     return Math.floor(Math.random() * 8)
    // }

    // const [cardList, setCardList] = useState({})

    // function randomizelist() {
    //     const listMutable = [...cardList];
    //     const newCardList = [];
    //     const cardDivs = document.querySelectorAll('.card')
    //     setCardList(cardDivs)
    //     for (let i = 0; i <= 8; i++) {
    //         const randomLocation = getRandomNumber()
    //         const cardToMove = listMutable[randomLocation];
    //         newCardList.push(cardToMove);
    //     }
    //     return newCardList;
    // }
    return (
        <>
        <Score currentScore={currentScore}/>
        <Game onClick={handleCurrentScore}/>
        </>
    ) 
} 