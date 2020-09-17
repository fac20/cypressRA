import React from "react"
import "../style/displayuser.css"; 

function DisplayUser({usernames, setState}) {
    console.log(usernames[0])
    return (
        <>
            <h1>{usernames}</h1>
            <button onClick={() => {
            setState("home");
        }}>Back to Home</button>
        </>
    )
}

export default DisplayUser