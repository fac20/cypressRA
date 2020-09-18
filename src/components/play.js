import React from "react";
import "../style/play.css";
import fetchData from "../utils/datahelpers";
import timer from "../utils/cardFlipper";


export default function Play({ usernames, difficulty }) {
    const [data, setData] = React.useState(null);
    const [counter, setCounter] = React.useState("3");
    const [firstFlippedState, setFirstFlippedState] = React.useState(null);
    const [secondFlippedState, setSecondFlippedState] = React.useState(null);
    const [result, setResult] = React.useState(null);
    const [flippedUrl, setFlippedUrl] = React.useState(null);


    React.useEffect(() => {
        fetchData(difficulty, usernames)
        .then(res => {
            setData(res);
            timer(setCounter, counter);
        })

    }, [])

    if (counter === 0) {
        setCounter(null)
    }

    if (!data) {
        return (<h1>Page Loading</h1>)
    }
    return (
        <>                  
            {counter ? <h1>{counter}</h1> : null}
            {result ? <h1>{result}</h1> : null}
            <div className="play-grid"> {data.map(( user, index) => 
                <button 
                index={index} onClick={(event) => {
                    if (firstFlippedState === null) {
                        setFirstFlippedState(index)
                        console.log(user.avatar_url);
                        setFlippedUrl(user.avatar_url)
                    } else {
                        setSecondFlippedState(index)
                        if (flippedUrl === user.avatar_url) {
                            setResult("You Win"); 
                            console.log("WInner")
                        } else {
                            setResult("You Lose");
                        }
                    }
                }}
                className={(firstFlippedState === index || secondFlippedState === index || counter) ? "user-card": "hidden user-card"}>
                    <img src={user.avatar_url} alt="user avatar"></img>
                    <h3>{user.login}</h3>
                </button>)}
            </div>
        </>
    )

}




                     // if (event.target.className === "user-card hidden"){
                        //     event.target.classList.remove("hidden");
                        //     event.target.classList.add("flipped");
                        // } else {
                        //     event.target.parentNode.classList.remove("hidden");
                        //     event.target.parentNode.classList.add("flipped");    
                        // }
                        // setFlippedState(flippedState => flippedState + 1);
                    // }} 



// console.log("flippedState", flippedState);

    // if (flippedState === 2) {
    //     const flippedCards = document.querySelectorAll(".flipped");
    //     console.log(flippedCards[0].childNodes[0].src)
    //     if (flippedCards[0].childNodes[0].src === flippedCards[1].childNodes[0].src ) {
    //         console.log("you win");
    //         setResult("You Win");
    //     } else {
    //         console.log("you lose");
    //         setResult("You Lose");
    //     }
    // }

    
    // document.querySelectorAll(".user-card").forEach(card => {
    //     card.addEventListener("click", (event) => {
    //         event.target.classList.remove("hidden");
    //         // event.target.removeEventListener()

    //     }

