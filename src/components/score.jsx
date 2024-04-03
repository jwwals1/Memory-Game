// eslint-disable-next-line react/prop-types
function Score ({currentScore, highScore}) {
    return (
    <div className="scoreboard">
        <div className="score">Score: <span>{currentScore}</span></div>
        <div>High Score: <span>{highScore}</span></div>
    </div>
    )
}

export default Score