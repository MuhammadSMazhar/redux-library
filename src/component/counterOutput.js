import React from 'react';
import { useSelector } from 'react-redux';

export const CounterOutput=()=>{
    const counter = useSelector( (state)=> state.counter )
    console.log('counter',counter)
    return(
        <div>
            Counter is {counter}
        </div>
    )
}