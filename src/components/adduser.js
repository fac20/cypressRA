import React from "react";
import "../style/adduser.css";   

function AddUser({setState, usernames}) {
    console.log(usernames)
    return (
        <form>
            <label htmlFor="username">
                Enter your GitHub username:
            </label>
            <input type="text" id="username"></input>
            <button type="submit" onClick={(event) => {
                event.preventDefault();
                usernames.push(document.getElementById("username").value)
                console.log(document.getElementById("username").value)
                setState("displayuser");
            }}>Generate a card with my username </button>
        </form>
    )
}

export default AddUser;
