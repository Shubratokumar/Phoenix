import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Production from './Production';
import Studio from './Studio';
import Studios from './Studios';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Production />
            <Studio />
            <Studios />
            <Footer />
        </div>
    );
};

export default Home;