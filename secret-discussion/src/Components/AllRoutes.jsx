import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Destination from "../pages/Destination"
import About from "../pages/About"
import Contact from "../pages/Contact"
function AllRoutes(){
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
</Routes>
)
}
export default AllRoutes