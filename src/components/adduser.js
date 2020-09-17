import React from "react";
import "../style/adduser.css";   

function AddUser({setState, usernames, setUsernames}) {
    console.log(usernames)
    return (
        <form>
            <label htmlFor="username">
                Enter your GitHub username:
            </label>
            <input type="text" id="username"></input>
            <button type="submit" onClick={(event) => {
                event.preventDefault();
                let newValue = document.getElementById("username").value
                let newArray = usernames.push(newValue)
                setUsernames(newArray)
                console.log(usernames)
                setState("displayuser");
            }}>Generate a card with my username </button>
        </form>
    )
}

export default AddUser;
