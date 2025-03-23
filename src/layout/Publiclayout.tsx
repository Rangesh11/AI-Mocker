import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";


export default function Publiclayout() {
  return (
    <div className="w-full">
        <Header/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}
