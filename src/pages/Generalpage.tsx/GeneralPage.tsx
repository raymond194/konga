import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../home/HomePage';
import TrackOrder from '../TrackOrder/TrackOrder';
import ForgotPswd from '../forgotpswd/ForgotPswd';
import Header from '../home/Header';
import Body from '../home/Body';
import Footer from '../home/Footer';

const GeneralPage: React.FC = () => {

    return (
        <>

                <Header />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<Body />} />
                    <Route path="/trackMyOrder" element={<TrackOrder />} />
                    <Route path="/forgotPswd" element={<ForgotPswd />} />
                </Routes>

                <Footer />
        </>
    )
}

export default GeneralPage
