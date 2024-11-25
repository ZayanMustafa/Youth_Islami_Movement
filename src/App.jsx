import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./Auth/Login";
import RegisterForm from "./Auth/Signin";
import ReadMoreAboutUs from "./components/readmoreaboutus";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/readmore" element={<ReadMoreAboutUs />}></Route>
          <Route path="/signin" element={<RegisterForm />}></Route>
          <Route path="/login" element={<LoginForm />} ></Route>

        </Routes>
      </BrowserRouter>
    </>

  )
}