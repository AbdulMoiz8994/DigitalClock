import React from 'react';


export const DigitalClock=() =>{

    const time=new Date().toLocaleTimeString()
   return(
       <div>
        <h1>Digital Clock</h1>           
         <h1>{time}</h1>
       </div>
   )
}