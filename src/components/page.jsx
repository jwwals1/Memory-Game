import { useState } from "react";
import Cards from "./cards";
import Score from "./score";

export default function Page() {
    const [currentScore, setCurrentScore] = useState(0)

    function changeScore () {
        setCurrentScore(previous => previous + 1)
    }
    return (
        <>
        <Cards/>
        <Score currentScore={currentScore} onChange={changeScore}/>
        </>
    )
}