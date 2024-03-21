import { useState } from "react";
import Cards from "./cards";
import Score from "./score";

export default function Page() {
    const [currentScore, setCurrentScore] = useState(0)

    const handleCurrentScore = () => {
        const newScore = currentScore + 1
        setCurrentScore(newScore)
    }
    return (
        <>
        <Score currentScore={currentScore}/>
        <Cards onClick={handleCurrentScore}/>
        </>
    ) 
}