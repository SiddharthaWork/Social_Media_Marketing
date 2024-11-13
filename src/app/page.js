import Agile from "@/components/Agile";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import End from "@/components/End";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Partner from "@/components/Partner";
import Social from "@/components/Social";
import Solution from "@/components/Solution";
import Things from "@/components/Things";

export default function Home() {
  return (
   <div className="overflow-x-hidden overflow-y-hidden">
    {/* <Navbar /> */}
    <Nav/>
    <Hero/>
    <Social/>
    <Contact/>
    <Solution/>
    <Agile/>
    <Partner/>
    <Card/>
    <Things/>
    <End/>
    <Footer/> 
   </div>
  );
}
