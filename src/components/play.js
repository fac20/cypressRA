import React from "react";
import "../style/play.css";
import fetchData from "../utils/datahelpers";
import timer from "../utils/cardFlipper";


export default function Play({ usernames, difficulty, setState }) {
    const [data, setData] = React.useState(null);
    const [counter, setCounter] = React.useState("3");
    const [flippedState, setFlippedState] = React.useState([]);
    const [result, setResult] = React.useState(null);
    const [flippedUrl, setFlippedUrl] = React.useState(null);


    React.useEffect(() => {
        fetchData(difficulty, usernames)
        .then(res => {
            setData(res);
            timer(setCounter, counter);
        })
/* eslint-disable */
    }, [])
/* eslint-enable */

    if (counter === 0) {
        setCounter(null)
    }

    if (!data) {
        return (<h1>Page Loading</h1>)
    }
    return (
        <div class="play">                  
            
            {result ? <h1>{result}</h1> : null}
            {counter ? <h1>{counter}</h1> : null}
            <div className="play-grid"> 
            {data.map(( user, index) => 
                <button 
                index={index} onClick={(event) => {
                    if (flippedState.length % 2 === 0) {
                        setFlippedState(flippedState => flippedState.concat(index))                        
                        setFlippedUrl(user.avatar_url)
                    } else {
                        setFlippedState(flippedState => flippedState.concat(index))
                        if (flippedUrl === user.avatar_url) {
                            setResult("You Win"); 
                        } else {
                            setState("gameover");

                        }
                    }
                }}
                className={(flippedState.includes(index) || counter) ? "user-card": "hidden user-card"}>
                    <img src={user.avatar_url} alt="user avatar"></img>
                    <h3>{user.login}</h3>
                </button>)}
            </div>
        </div>
    )

}

