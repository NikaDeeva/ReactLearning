import { useState, useEffect } from "react";
  
function Timer(){

    const [seconds, setSeconds] = useState(0);

    const [running, setRunning] = useState(true)


useEffect(() => {

    if(!running) return;


    const interval = setInterval(() => {
        setSeconds(prev => prev + 1)
    },1000)


    return () => clearInterval(interval)

}, [running])


    return (
        <div>
            <p>Timer: {seconds}</p>
            <button onClick={() => setRunning(false)}>Stop timer</button>
        </div>
    )
}

function ImprovedTimer(){

    const [time, setTime] = useState(0)

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;
const interval = setInterval(() => {
        setTime(prev => prev + 1)
    }, 1000)
    return () => {clearInterval(interval)}
    }, [isRunning])

    return (
        <div>
            <p>Timer: {time}</p>
            <button onClick={() =>  setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={() => {
               setTime(0);
               setIsRunning(false)
            } }>Reset</button>
        </div>
    )

    
}