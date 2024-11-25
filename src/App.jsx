import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./Auth/Login";
import RegisterForm from "./Auth/Signin";

export default function App (){
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>} ></Route>
          <Route path="/login" element = {<LoginForm/>} ></Route>
          <Route path="/signin" element= {<RegisterForm/>}></Route>
          <Route path="/Hasan" element= {<h1>Hasan Raza</h1>} ></Route>
        </Routes>
       </BrowserRouter>
    </>
    
  )
}