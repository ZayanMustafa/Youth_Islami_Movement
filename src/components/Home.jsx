import Footer from "./Footer";
import HeroSection from "./HeroSection";
import JoinUs from "./JoinUs";
import NavBar from "./Navbar";
import Programs from "./Programs";
import Static from "./Static";
import Team from './Team';
export default function Home (){
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