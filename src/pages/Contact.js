import FormContact from "../components/Form";
import { useState, useEffect } from "react";


const Contact = () => { 

    const [data, setData] = useState({});
    
    const getData = (FormData) =>{
        setData (FormData);
    }

    useEffect(() =>{
        console.log('Something Rendered');
    }); 
    
    return( 
        <div>
            <h1>{data.firstNameInfo}   {data.lastNameInfo}</h1>
            <FormContact callback={getData}></FormContact>
            <h1>You are on the Contact Us</h1>
        </div>


     );
}
 
export default Contact;