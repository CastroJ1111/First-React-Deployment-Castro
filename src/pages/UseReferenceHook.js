import { useEffect, useRef } from "react";
import RenderCounter from "../components/renderCounter";




const UseReferencePage = () => {

    const selectingElements = useRef();
    useEffect(() =>{
        alert('Rendered Something');
        // selectingElements.current.focus();
    });
    const getValue = function(){
        alert(selectingElements.current.value);
    }
    const changeValue = function(){
       selectingElements.current.value = "Changed Value";
    }
    const getClass = function(){
        alert(selectingElements.current.classList);
    }
    return ( 
        <div>
            <input ref={selectingElements} type="text" className="SampleClass Basic Class"/>
            <button onClick={getValue}>Get the Value of Text</button>
            <button onClick={changeValue}>Change the Value of Text</button>
            <button onClick={getClass}>Get the Classlist of Text</button>
            <h1>Use Reference Page</h1>
            <hr /> <hr />
            <RenderCounter></RenderCounter>
        </div>
     );
}
 
export default UseReferencePage;