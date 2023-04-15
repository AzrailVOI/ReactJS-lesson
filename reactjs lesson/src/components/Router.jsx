import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/home/Home.jsx";
import {CarDetail} from "./screens/car-detail/carDetail";

export const Router = () =>{
    return <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<CarDetail />} path='/car/:id'/>
            <Route path='*' element={<div>Not Found</div>}/>
        </Routes>
    </BrowserRouter>
}
// export default Router
