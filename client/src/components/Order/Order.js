import React from 'react';
import Footer from '../Footer/Footer';
import NavTabs from '../NavTabs/NavTabs';
import './styles.scss'
const Order = () => {
    return (
        <div>
            <div className="container">
                <NavTabs />
            </div>
            <Footer />
        </div>
    );
};

Order.propTypes = {};

export default Order;