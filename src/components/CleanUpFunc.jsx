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



function Clock(){

    const [time, setTime] = useState(new Date())

   const [isTwelve, setIsTwelve] = useState(false);

   function twelveFormatHours(){
    if (time.getHours() > 12){
const hours = time.getHours() - 12;
return hours;
    }
   else if (time.getHours() === 0){
        const hours = 12;
        return hours;
    }
    else {
        return time.getHours();
    }
    
   }



    useEffect(() => {
         const interval = setInterval(() => {
            setTime(new Date())
         }, 1000)
         return () => {clearInterval(interval)}
    }, []);


    return (
        <div>
            <button onClick={() => {setIsTwelve(true)}}>12 hour format</button>
            <button onClick={() => {setIsTwelve(false)}}>24 hour format</button>
            {isTwelve && (
                 <p>Current time: {twelveFormatHours()}:{time.getMinutes().toString().padStart(2, "0")}:{time.getSeconds().toString().padStart(2, '0')} {time.getHours() >= 12 ? 'PM' : 'AM'}</p>
            )
           
            }
            {!isTwelve && (
                <p>Current time: {time.getHours()}:{time.getMinutes().toString().padStart(2, "0")}:{time.getSeconds().toString().padStart(2, "0")}</p>
            )}
            </div>
    )
}