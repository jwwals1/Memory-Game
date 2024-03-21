// eslint-disable-next-line react/prop-types
function Cards({onClick}) {
    return (
        <>
        <div>
        <div className="card" onClick={onClick}>Test Card 1</div>
        <div className="card" onClick={onClick}>Test Card 2</div>
        <div className="card" onClick={onClick}>Test Card 3</div>
        <div className="card" onClick={onClick}>Test Card 4</div>
        <div className="card" onClick={onClick}>Test Card 5</div>
        <div className="card" onClick={onClick}>Test Card 6</div>
        <div className="card" onClick={onClick}>Test Card 7</div>
        <div className="card" onClick={onClick}>Test Card 8</div>
        </div>
        </>
    )
}


export default Cards
