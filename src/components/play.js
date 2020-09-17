import React from "react";
import "../style/play.css";
import fetchData from "../utils/datahelpers";
import timer from "../utils/cardFlipper";


export default function Play({ usernames, difficulty }) {
    const [data, setData] = React.useState("Hi");
    const [counter, setCounter] = React.useState("1");
    let [flippedState, setFlippedState] = React.useState(0);
    let previousCard = ""
    const [result, setResult] = React.useState(null);


    React.useEffect(() => {
        fetchData(difficulty, usernames)
        .then(res => {
            console.log(res);
            const allData = res.map(user =>  
                (
                    <button onClick={(event) => {
                        if (event.target.className === "user-card hidden"){
                            event.target.classList.remove("hidden");
                            event.target.classList.add("flipped");
                        } else{
                            event.target.parentNode.classList.remove("hidden");
                            event.target.parentNode.classList.add("flipped");    
                        }
                        console.log(event.target)
                        setFlippedState(flippedState => flippedState + 1);
                        console.log("flippedState", flippedState);

                        
                        
                        
                        if (flippedState === 1) {
                            const flippedCards = document.querySelectorAll(".flipped");
                            console.log(flippedCards[0].childNodes[0].src)
                            if (flippedCards[0].childNodes[0].src === flippedCards[1].childNodes[0].src ) {
                                console.log("you win");
                                setResult("You Win");
                            } else {
                                console.log("you lose");
                                setResult("You Lose");
                            }
                        }

                        // if (flippedState) {
                        //     console.log(event.target)
                        //     //comparison with previousCard
                        // } else {
                        //     // save value to previousCard
                        // }
                        // //flippedState = !flippedState
                    }} className="user-card" >
                            <img src={user.avatar_url} alt="user avatar"></img>
                            <h3>{user.login}</h3>
                    </button>
                )
            )
            return allData;
        })
        .then(JSX => {
            setData(JSX);
            timer(setCounter, counter);
        })

    
    }, [flippedState, result])

    if (counter === 0) {
        document.querySelectorAll(".user-card").forEach(x => {
            x.classList.add("hidden");
            setCounter(null)
        })
    }

    
    // document.querySelectorAll(".user-card").forEach(card => {
    //     card.addEventListener("click", (event) => {
    //         event.target.classList.remove("hidden");
    //         // event.target.removeEventListener()

    //     }




    return (
        <>                  
            {counter ? <h1>{counter}</h1> : null}
            {result ? <h1>{result}</h1> : null}
            <div className="play-grid">{data}</div>
        </>
    )

    
}
