import React from "react";
import "../style/gameover.css";  

export default function Gameover ({setState}) {
    return (
        <div class="gameover">
            <h1>GAME OVER.</h1>
            <button onClick={() => setState("play")}>Play again ?</button>
            <button onClick={() => setState("home")}>Back to Home</button>
        </div>
    )
}