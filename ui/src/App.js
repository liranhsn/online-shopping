import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalContext } from './context/GlobalContext';
import { CartContext } from './context/CartContext';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Cards from './pages/Cards/Cards';
import CardInfo from './pages/CardInfo/CardInfo';
import Login from './pages/Login/Login';

import './App.scss';

function App() {
    const [isLoadingApp, setIsLoadingApp] = useState(false);
    const [cartContent, setCartContent] = useState([]);

    React.useLayoutEffect(() => {
        document.body.setAttribute('dir', 'rtl');
    }, []);

    return (
        <CartContext.Provider value={{ cartContent, setCartContent }}>
            <GlobalContext.Provider value={{ isLoadingApp, setIsLoadingApp }}>
                {isLoadingApp && <Loader />}

                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cards" element={<Cards />} />
                    <Route
                        path="/cards/cardInfo/:cardId"
                        element={<CardInfo />}
                    />
                </Routes>
            </GlobalContext.Provider>
        </CartContext.Provider>
    );
}

export default App;
