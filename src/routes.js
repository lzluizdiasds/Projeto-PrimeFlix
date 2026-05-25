import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Filme from './pages/Home/Filme';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filmes:id" element={ <Filme/> }/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;