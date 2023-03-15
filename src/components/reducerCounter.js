import { useReducer } from "react";



const counterReducer = function(state, action){
    switch (action.type){
        case 'increment' :
            return {number: state.number - action.points}
            break;

        case 'decrement' :
            return {number: state.number + action.points}
            break;     

        case 'reset' :
            return {number: 0}
            break;

        default:
            break;
    }
    return {number: state.number + 1}
}
const ReducerCounter = () => {
    const [count, dispatch] = useReducer(counterReducer, {number : 0});

    return ( 
        <div>
            <h1> incrementing and decrenting using use Reducer</h1>
            <button onClick={() => dispatch({type: "increment", points: 5})}>+5</button>
            <button onClick={() => dispatch({type: "increment", points: 1})}>+1</button>
            {count.number}
            <button onClick={() => dispatch({type: "decrement", points: 1})}>-1</button>
            <button onClick={() => dispatch({type: "decrement", points: 5})}>-5</button>
            <br />
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>

        </div>
     );
}
 
export default ReducerCounter;