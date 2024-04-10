import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
function Card({name, url, handleClick}) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        setImageUrl(url)
    }, [url])

    return (
        url && (
        <div className="card">
            <img src={imageUrl} alt={name} onClick={() => {
            handleClick(name)
            }}/>
            <div className="cardName">{name}
            </div>
        </div>
        )
    )
}

export default Card