import React from "react";
import "../style/home.css";  
import Play from "./play";
import Adduser from "./adduser";

export default function Home({setState}) {
    const usernames = ["aissshah", "akomiqaia", "Albadylic", "Alexreid95", "Azizi-A", "CampbellDocherty", "Chloeh24", "fairyaksh", "ephieo", "glrta", "hannahgooding", "HettieM", "itsina96", "Ivo-Evans", "jackherizsmith", "jamesj-0", "jenndroid", "jessica440", "jhart5", "Jihyun-Jang", "Joepock123", "khadija-nur", "LiCern", "Lizzy-j", "mhtien", "Netceer", "oliverjam", "RihardsJ", "Roger-Heathcote", "amberrignell", "RunGT", "sofer", "tacotoemeck", "trishtracking", "yvonne-liu", "VatsKan"];
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