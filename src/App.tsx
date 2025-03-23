import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Publiclayout from "./layout/Publiclayout"

import Home from "./components/routes/Home"
import Authlayout from "./layout/Authlayout"
import Signin from "./components/routes/Signin"
import Signup from "./components/routes/Signup"


export default function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Publiclayout/>}>
        <Route index element={<Home/>}/>
        </Route>
        <Route element={<Authlayout/>}>
        <Route path='/Sign-in/*' element={<Signin/>}/>
        <Route path='/Sign-up/*' element={<Signup/>}/>
        </Route>
      </Routes>
    </Router> 

  )
}