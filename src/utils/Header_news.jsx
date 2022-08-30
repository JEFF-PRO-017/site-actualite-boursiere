import React from 'react';

function Header_news() {
    return (
        <React.StrictMode>
            <div className="">
                <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic outlined example"
                >
                    <button type="button" className="btn btn-outline-secondary">
                        Left
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Middle
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Right
                    </button>
                </div>
            </div>
        </React.StrictMode>
    );
}
export default Header_news;
