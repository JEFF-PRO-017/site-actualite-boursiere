import React from 'react';
import Cont_merge from '../container/cont-merge';
import Nav_merge from '../container/nav/nav-merg';

function Merge({ data }) {
    return (
        <React.StrictMode>
            <div>
                <Cont_merge data={data} />
            </div>
        </React.StrictMode>
    );
}
export default Merge;
