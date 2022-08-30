import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/public/style.css';

function Loading() {
    return (
        <React.StrictMode>
            <div className="loading">
                <div className="spinner-grow" role="status"></div>
                <span className=""> Loading . . .</span>
            </div>
        </React.StrictMode>
    );
}
export default Loading;
