import Game from "./game"

export default function Page() {

    return (
        <>
        <div className='intro'>
            <div><h1 className="title">MEMORY GAME</h1></div>
            <div><h2 className='rulesText'>Do not click on the same Pokemon twice!</h2></div>
        </div>
        <Game/>
        </>
    ) 
} 