import React from 'react';
import '../style/public/style.css';
import '../style/public/bootstrap.min.css';

function Loading() {
    return (
        <React.StrictMode>
            <div className="main-site loading ">
                <div
                    className="main-content space-top wrapper"
                    role="main"
                    id="mainContent"
                >
                    <div className="loader loader-8"></div>
                </div>
            </div>
        </React.StrictMode>
    );
}
export default Loading;
