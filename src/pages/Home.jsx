import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const Home = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>

    );
};

export default Home;