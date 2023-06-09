import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FormContact from "./components/Form";
import CartSingle from './pages/CartSingle'
import CartMultiple from "./components/CartMultiple";
import UseReferencePage from "./pages/UseReferenceHook";
import ReducerPage from "./pages/UseReducer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (


    <BrowserRouter>

      <div className="App">
        <NavigationBar></NavigationBar>
        <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/Work" element={ <Work/> }></Route>
            <Route path="/Contact" element={ <Contact/> }></Route>
            <Route path="/CartSingle" element={ <CartMultiple/> }></Route>
            <Route path="/HookUse" element={ <UseReferencePage/> }></Route>
            <Route path="/HookReducer" element={ <ReducerPage/> }></Route>
        </Routes>
      </div>
      
    <hr></hr>
    <Footer></Footer>
    <hr></hr>
    </BrowserRouter>

  );
}

export default App;
