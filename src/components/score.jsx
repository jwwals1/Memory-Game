// eslint-disable-next-line react/prop-types
function Score ({currentScore, highScore}) {
    return (
    <>
    <div>Score: <span>{currentScore}</span></div>
    <div>High Score: <span>{highScore}</span></div>
    </>
    )
}

export default Score