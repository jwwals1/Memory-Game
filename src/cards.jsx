import { useState } from "react"

function Cards() {
    const [currentScore, setCurrentScore] = useState(0)

    const increaseScore = () => {
        setCurrentScore(previous => previous + 1)
    }
    return (
        <>
        <div>Score: {currentScore}</div>
        <div>
        <div className="card" onClick={increaseScore}>Test Card 1</div>
        <div className="card" onClick={increaseScore}>Test Card 2</div>
        <div className="card" onClick={increaseScore}>Test Card 3</div>
        <div className="card" onClick={increaseScore}>Test Card 4</div>
        <div className="card" onClick={increaseScore}>Test Card 5</div>
        <div className="card" onClick={increaseScore}>Test Card 6</div>
        <div className="card" onClick={increaseScore}>Test Card 7</div>
        <div className="card" onClick={increaseScore}>Test Card 8</div>
        </div>
        </>
    )
}


export default Cards
