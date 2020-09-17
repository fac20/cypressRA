import React from "react";
import "../style/play.css";  


export default function Play({ usernames, difficulty }) {
    

    return(<h1>{usernames.sort(() => Math.random() - 0.5)}</h1>)

}