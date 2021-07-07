import React,{useState} from 'react'

export const Timer = () => {
  
    let [second, setSeconds]=useState(0);
    let [minute, setMinutes]=useState(0);
    let [hour, setHours]=useState(0);
    let [interv, setIntervals]=useState()
    let [status, setStatus]=useState(0)

    console.log(status);

function Run() {
   if(status !== 1){
       setStatus(1)

     setIntervals(
         setInterval(() => {
            Start()
       },1000)
     )  
   } 
}
function Start() {
    if(second === 60){
        
        setMinutes(++minute)
        second=0
    }
    if(minute === 60){
        setHours(++hour)
        minute=0
    }
    setSeconds(++second)
}
function Stop() {
    if(status !== 0){
        setStatus(2)
        clearInterval(interv)
    }
}

function Restart(){
   setSeconds(0)
   setMinutes(0)
   setHours(0)
   setStatus(0)
   clearInterval(interv)
}

    return (
        <div>
          <span>{hour < 10 ? `0${hour}` : hour}</span>
          <span>{minute < 10 ? `0${minute}` : minute}</span>
          <span>{second < 10 ? `0${second}` : second}</span>


          <button onClick={Run}>Start</button>
          <button onClick={Stop}>Stop</button>
          <button onClick={Restart}>Restart</button>
        </div>
    )
}
