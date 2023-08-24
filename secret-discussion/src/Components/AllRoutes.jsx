import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Destination from "../pages/Destination"
import About from "../pages/About"
function AllRoutes(){
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Destination />} />
</Routes>
)
}
export default AllRoutes