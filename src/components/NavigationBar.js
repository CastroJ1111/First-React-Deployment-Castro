import { Link } from "react-router-dom";





const NavigationBar = () => {
    return ( 

        <div>
            <ul className="nav">
                <li>
                    <Link to="/">
                        Homes
                    </Link>
                </li>

                <li>
                    <Link to="/Work">
                        Work
                    </Link>
                    {/* <a href="/Work">Work</a> */}
                </li>

                <li>
                    <Link to="/Contact">
                        Contact
                    </Link>
                     {/* <a href="/Contact">Contact</a> */}
                </li>

                <li>
                    <Link to="/CartSingle">
                        Cart
                    </Link>
                </li>

                <li>
                    <Link to="/HookUse">
                        Use Reference Hook
                    </Link>
                </li>

                <li>
                    <Link to="/HookReducer">
                        Use Reference Hook Reducer
                    </Link>
                </li>

            </ul>
        </div>
     );
}
 
export default NavigationBar;