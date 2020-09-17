import React from "react";

const timer = (setCounter) => {

    let counter = 10;
    let interval = setInterval(() => {
        if (counter === 0) {
            console.log("finished")
            clearInterval(interval)

        } else {
            counter = counter -1;
            setCounter(counter);
        }
    }, 1000)
}   

export default timer

