import React, { useState, useEffect } from "react";

const Timer = ({setScreen}) => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (count === 1) {
            setScreen("open")
            clearInterval(intervalId);           
          } else {
       
            setCount(count - 1);
          }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [count]);


    return (
        <div className="timer">
        {count}
        </div>
    );
};

export default Timer;