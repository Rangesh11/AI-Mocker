import LoaderPage from "@/components/routes/LoaderPage";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}:{children:React.ReactNode}) => {
    const {isLoaded , isSignedIn}=useAuth();
    if(!isLoaded) {
        <LoaderPage/>
    }
    if(isSignedIn) {
        return <Navigate to={"/Sign-in/*"}/>
    }
  return children;
}

export default ProtectedRoutes