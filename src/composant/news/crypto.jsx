import React from 'react';
import Cont_cryp from '../container/cont-cryp';
import Nav_cryp from '../container/nav/nav-cryp';

function Crypto({ data }) {
    return (
        <React.StrictMode>
            <div>
                <Cont_cryp data={data} />
            </div>
        </React.StrictMode>
    );
}
export default Crypto;
