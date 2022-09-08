import {Routes, Route} from 'react-router'
import MainTemplate from "./template/MainTemplate";
import Home from "./pages/Home";
import Product from './pages/Product';
import './App.css'

const App = () => (
    <>
        <MainTemplate>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Product />} />
            </Routes>
        </MainTemplate>
    </>
);
export default App;
