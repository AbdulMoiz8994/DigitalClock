import React,{useState} from 'react';


export const DigitalClock=() =>{

    const time=new Date().toLocaleTimeString()
   const [cTime, setTime]=useState()
     const updateDate=() =>{
         setTime(time)
     }
    setInterval(updateDate,1000) 
   return(
       <div>
        <h1>Digital Clock</h1>           
         <h1>{time}</h1>
         {/* <button onClick={updateDate}>Click</button> */}
       </div>
   )
}