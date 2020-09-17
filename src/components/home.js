import React from "react";
import "../style/home.css";  
import Play from "./play";
import Adduser from "./adduser";

export default function Home({setState}) {
    const [difficulty, setDifficulty] = React.useState(6);
    
    return (
        <main>
            <label htmlFor="difficulty">Select the difficulty you'd prefer</label>
            <input id="difficulty" name="difficulty" type="range" min="6" max={usernames.length * 2} step="2" onChange={
                (e) => {setDifficulty(e.target.value)}
            }>
            </input>
            <p>Difficulty: {difficulty}</p>

        <button onClick={() => {
            console.log("start clicked");
            setState("play");
        }}>Start</button>
            {/* // <button onClick={setState("play")}>Add a user</button> */}
        </main>
    )
}