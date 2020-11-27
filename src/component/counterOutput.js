import React from 'react';
import { useSelector } from 'react-redux';

export const CounterOutput=()=>{
    const counter = useSelector( (state)=> state.counter )
    return(
        <div>
            Counter is {counter}
        </div>
    )
}