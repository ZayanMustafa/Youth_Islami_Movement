import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Programs from "./components/Programs";
import Static from "./components/Static";
import Team from "./components/Team";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

export default function App (){
  return (
    <>
        <NavBar/>    
        <HeroSection/>
        <Programs/>
        <Static/>
        <Team/>
        <JoinUs/>
        <Footer/>
    </>
    
  )
}