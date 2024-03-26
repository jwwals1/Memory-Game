// import { useState } from "react"
import Card from "./card";

// eslint-disable-next-line react/prop-types
function Game({onClick}) {
    // const [clicks, setClicks] = useState
    const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

    const randomizeArray = (array) => {
        const newArray = [];
        const arrayCopy = [...array];

        while (arrayCopy.length > 0) {
            let randomIndex = Math.floor(Math.random() * 12);
            newArray.push(arrayCopy.splice(randomIndex, 1));
        }
        return newArray
    }

    let cards = names.map((name) => {
        return (
            <>
            <div key={name}>
                <Card name={name}/>
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
    // function randomize(array) {
    //     for (let i = array.lenth - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array
    // }
    // function showDivs () {
    //     let divArray = []
    //     let divs = document.querySelectorAll('.card');
    //     divArray.push(divs)
        // console.log(divArray)

        // const shuffle = (array) => {
        //     for (let i = array.length - 1; i > 0; i--) {
        //         const j = Math.floor(Math.random() * (i + 1));
        //         [array[i], array[j]] = [array[j], array[i]]
        //     }
        //     return array
        // }
        // const myArray = [1,2,3]
        // const shuffleArray = shuffle(divArray)
        // console.log(shuffleArray)
    }
    // return (
    //     <>
    //     <div>
    //     <div className="card" onClick={showDivs}>Test Card 1</div>
    //     <div className="card" onClick={onClick}>Test Card 2</div>
    //     <div className="card" onClick={onClick}>Test Card 3</div>
    //     <div className="card" onClick={onClick}>Test Card 4</div>
    //     <div className="card" onClick={onClick}>Test Card 5</div>
    //     <div className="card" onClick={onClick}>Test Card 6</div>
    //     <div className="card" onClick={onClick}>Test Card 7</div>
    //     <div className="card" onClick={onClick}>Test Card 8</div>
    //     </div>
    //     </>
    // )



export default Game
