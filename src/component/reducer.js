const initialState = {
    counter : 0
}
export function Reducer(state = initialState.counter , action){
    switch(action.type){
        case 'INCREAMENT':
            return {
             [...state , counter : state.counter + 1]
        };
        case 'DECREAMENT':
            return{
                [state]
        };
        default:
            return state
    }
} 