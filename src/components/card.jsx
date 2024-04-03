import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
function Card({name, url, handleClick}) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        setImageUrl(url)
    }, [url])

    return (
        url && (
        <div className="card" onClick={() => {
            handleClick(name)
        }}><img src={imageUrl} alt={name}/><div className="cardName">{name}</div></div>
        )
    )
}

export default Card