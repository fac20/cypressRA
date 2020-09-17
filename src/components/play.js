import React from "react";
import "../style/play.css";
import fetchData from "../utils/datahelpers";
import timer from "../utils/cardFlipper";


export default function Play({ usernames, difficulty }) {
    const [data, setData] = React.useState("Hi");
    const [counter, setCounter] = React.useState("10");

    React.useEffect(() => {
        fetchData(difficulty, usernames)
        .then(res => {
            console.log(res);
            const allData = res.map(user =>  
                (
                    <div className="user-card" >
                            <img src={user.avatar_url} alt="user avatar"></img>
                            <h3>{user.login}</h3>
                    </div>
                )
            )
            return allData;
        })
        .then(JSX => {
            setData(JSX);
            timer(setCounter);
        })
    }, [])

    return (
        <>
            <div className="play-grid">{data}</div>
            {counter ? <h3>{counter}</h3> : null}
        </>
    )
}
