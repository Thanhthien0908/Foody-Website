import React from 'react';
import NavbarG from '../NavbarG/NavbarG';
import Footer from '../Footer/Footer';
import NavTabs from '../NavTabs/NavTabs';
import './styles.scss'
const Order = () => {
    return (
        <div>
            <NavbarG />
            <div className="container">
                <NavTabs />
            </div>
            <Footer />
        </div>
    );
};

Order.propTypes = {};

export default Order;