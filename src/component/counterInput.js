import React from 'react';
import { useDispatch } from 'react-redux';
import { decreament, increament } from '../action/action';

export const CounterInput=()=>{
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch({
                type : increament,
            })
            }>+</button>
            <button onClick={()=>dispatch({
                type : decreament,
            })
            }>-</button>
        </div>
    )
}