// import { useState, useEffect } from "react";

// const useCards = () => {
//     const [deckId, setDeckId] = useState(null);
//     const [playingCards, setPlayingCards] = useState(null)

//     useEffect(() => {
//         const fetchDeckId = async () => {
//             const response = await fetch(
//                 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
//             );
//             const data = await response.json();
//             setDeckId(data.deck_id);
//         };
//         fetchDeckId
//     }, [])
//     const drawCards = async (deckId) => {
//         await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
//         .then((response) => response.json())
//         .then((response) => {
//             setPlayingCards(response.playingCards);
//         }).catch((error) => console.error(error))
//     };
//     useEffect(() => {
//         if (deckId !==null && deckId !== undefined) {
//             drawCards(deckId)
//         }
//     }, [deckId])
//     return {
//         playingCards
//     }
// }

// export { useCards}