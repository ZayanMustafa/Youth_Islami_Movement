import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import Programs from "./components/Programs";
import Static from "./components/Static";
import Team from "./components/Team";

export default function App (){
  return (
    <>
        <NavBar/>    
        <HeroSection/>
        <Programs/>
        <Static/>
        <Team/>
        <Contact/>
        <Footer/>
    </>
    
  )
}