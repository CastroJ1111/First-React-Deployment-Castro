import StateCounter from "../components/stateCounter";
import ReducerCounter from "../components/reducerCounter";

const ReducerPage = () => {
    return ( 
        <div>
            <h1>This is Use Reducer Page</h1>
            <br />
            <StateCounter></StateCounter>
            <br />

            <ReducerCounter></ReducerCounter>
        </div>
     );
}
 
export default ReducerPage;