import React from "react";
import "../style/play.css";
import fetchData from "../utils/datahelpers";


export default function Play({ usernames, difficulty }) {
    const [data, setData] = React.useState("Hi");

    React.useEffect(() => {
        fetchData(difficulty, usernames)
        .then(res => {
            console.log(res);
            const allData = res.map(user =>  
                (
                    <div className="user-card hidden" >
                        <img src={user.avatar_url} alt="user avatar"></img>
                        <h3>{user.login}</h3>
                    </div>
                )
            )
            console.log("alldata", allData)
            return allData;
        })
        .then(JSX => {
            setData(JSX);
        })
    }, [])

    return (
        <div className="play-grid">{data}</div>
    )
}
