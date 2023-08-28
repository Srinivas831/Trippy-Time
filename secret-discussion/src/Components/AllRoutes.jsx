import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Destination from "../pages/Destination"
import About from "../pages/About"
import Contact from "../pages/Contact"
import DestinationDetail from "../pages/DestinationDetail"
import Payment from "../pages/Payment"
import Signup from "../pages/Signup"
// import Login from "../pages/login"
import Loginpage from "../pages/Loginpage"


function AllRoutes(){
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Destination />} />
        <Route path="/explore/:id" element={<DestinationDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginpage/>} />
        
        <Route path="*" element={<h1>Page Not Found !!!</h1>} />
</Routes>
)
}
export default AllRoutes