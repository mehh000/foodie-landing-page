
import AboutUs from "@/components/aboutus";
import Footer from "@/components/footer";
import HomePage from "@/components/homePage";
import Menu from "@/components/menu";
import Navber from "@/components/navber";
import WhyUs from "@/components/whyus";


export default function Home() {
  return (
   <><Navber />
     <div className="bg-gradient-to-r from-white via-red-100 to-yellow-50 ">
     <div className="" id="page1">
 <HomePage />
     </div>
     <div className="" id="page2">
    <AboutUs />
     </div>
     <div className="" id="page3">
  <WhyUs />
     </div>
     <div className="" id="page4">
    <Menu />
     </div>
    
    <div className="" id="page5">
        <Footer /> 
    </div>

  </div>
   </>
 
  );
}
