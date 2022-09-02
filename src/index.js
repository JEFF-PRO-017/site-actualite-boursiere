import React from 'react';
import ReactDom from 'react-dom/client';
import Body from './pages/body';
import Nav from './pages/Nav';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Nav />
        <Body />
    </React.StrictMode>
);
