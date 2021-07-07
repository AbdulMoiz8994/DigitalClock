import React from 'react'

export const TimerButton = ({ButtonAction,ButtonValue}) => {
    return (
        <div>
            <button onClick={ButtonAction}>{ButtonValue}</button>
            {/* <button onClick={stop}>Stop</button> */}
            {/* <button onClick={restart}>Restart</button> */}
        </div>
    )
}
