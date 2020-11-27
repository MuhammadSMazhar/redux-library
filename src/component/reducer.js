import { decreament, increament } from "../action/action";

const initialState = {
    counter : 0
}
export function Reducer(state = initialState , action){
    switch(action.type){
        case increament:
            return {
             ...state , counter : state.counter + 1
        };
        case decreament:
            return{
                ...state , counter : state.counter - 1
        };
        default:
            return state
    }
} 