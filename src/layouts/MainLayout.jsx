import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Loading from '../components/Loading/Loading';

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        {isLoading ? <div className="py-20"><Loading /></div> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
