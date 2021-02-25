import React from 'react';
import NavbarG from '../NavbarG/NavbarG';
import Footer from '../Footer/Footer';
import TableStoreCard from '../TableStoreCard/TableStoreCard'
const StoreCard = () => {
    return (
        <div>
            <NavbarG />
            <div className="container">
                <TableStoreCard />
            </div>
            <Footer />
        </div>
    );
};

export default StoreCard;