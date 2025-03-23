
import { Outlet } from 'react-router-dom'



function Authlayout() {
    return (
        <div className="w-full h-screen  overflow-hidden flex items-center justify-center relative">
        <img src='/assets/images/bg.png' className="absolute w-full h-full object-cover opacity-20"/>
        <Outlet/> 
        </div>
    )
}

export default Authlayout
