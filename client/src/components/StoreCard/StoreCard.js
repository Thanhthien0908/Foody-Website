import React from 'react';
import Footer from '../Footer/Footer';
import TableStoreCard from '../TableStoreCard/TableStoreCard'
const StoreCard = () => {
    return (
        <div>
            <div className="container">
                <TableStoreCard />
            </div>
            <Footer />
        </div>
    );
};

export default StoreCard;