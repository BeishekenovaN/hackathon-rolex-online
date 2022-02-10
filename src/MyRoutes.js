import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import EditProduct from './Components/Admin/EditProduct/EditProduct';
import LoginIn from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import Cart from './Components/Cart/Cart';
import ProductsContextProvaider from './Components/Context/ProductsContext';
import MyNavbar from './Components/Header/MyNavbar';
import Home from './Components/Home/Home';
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';


const MyRoutes = () => {
    return (
        <ProductsContextProvaider>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route path='/add' element={<AddProduct/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/edit/:id' element={<EditProduct/>}/>
                    <Route path='/detail/:id' element={<ProductDetail/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<LoginIn/>}/>
                </Routes>
            </BrowserRouter>
        </ProductsContextProvaider>  
    );
};

export default MyRoutes;