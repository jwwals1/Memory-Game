import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
function Card({name, url, handleClick}) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        setImageUrl(url)
    }, [url])
//     return (
//         <div className="card" onClick={() => {
//             handleClick(name)
//         }}>
//             <img src={images} />
//         </div>
//     )
// }
    return (
        url && (
        <div className="card" onClick={() => {
            handleClick(name)
        }}><img src={imageUrl} alt={name}/></div>
        )
    )
}
// const [imageUrl, setImageUrl] = useState("");
// useEffect(() => {
//     setImageUrl(url)
// }, [url])
// return (
//     <div className="card">
//         <img src={imageUrl}
//         alt={name}
//         onClick={() => {
//             handleClick(name)
//         }} />
//     </div>

export default Card