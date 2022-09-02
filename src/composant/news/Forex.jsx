import React from 'react';
import '../../style/public/style.css';
// import Carousel1 from '../../utils/carousel1';
import Cont_fx from '../container/cont-forex';
import Nav_forex from '../container/nav/nav-forex';

// const convertTime = (timeBrut) => {
//     let dateObj = new Date(timeBrut * 1000);
//     let utcString = dateObj.toUTCString();
//     let time = utcString.slice(-11, -4);
//     return time;
// };

const Forex = ({ data }) => {
    return (
        <React.StrictMode>
            <div>
                <Cont_fx data={data} />
            </div>
        </React.StrictMode>
    );
};

export default Forex;

