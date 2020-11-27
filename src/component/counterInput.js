import React from 'react';
import { useDispatch } from 'react-redux';
import { decreamentAction, increamentAction } from '../action/action';

export const CounterInput=()=>{
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(increamentAction())
            }>+</button>
            <button onClick={()=>dispatch(decreamentAction())
            }>-</button>
        </div>
    )
}