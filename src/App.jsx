import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./Auth/Login";
import RegisterForm from "./Auth/Signin";
import ReadMoreAboutUs from "./components/readmoreaboutus";
import NotFound from "./components/NotFound";
import {NextUIProvider} from '@nextui-org/react'
export default function App() {
  return (
    <>
    <NextUIProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/readmore" element={<ReadMoreAboutUs />}></Route>
          <Route path="/signin" element={<RegisterForm />}></Route>
          <Route path="/login" element={<LoginForm />} ></Route>
          <Route path="/uncaugtherroronloadingthispage" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
    </>

  )
}