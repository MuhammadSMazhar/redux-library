import React from 'react';

export const CounterInput=(props)=>{
    return(
        <div>
            <button onClick={()=>props.setCounter(props.counter + 1)}>+</button>
            <button onClick={()=>props.setCounter(props.counter - 1)}>-</button>
        </div>
    )
}