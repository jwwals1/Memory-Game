// eslint-disable-next-line react/prop-types
function Card({name, handleClick}) {
    return (
        <div className="card" onClick={() => {
            handleClick(name)
        }}>{name}</div>
    )
}

export default Card