import React from 'react';
import ReactDom from 'react-dom/client';
import Body from './pages/body';

const root = ReactDom.createRoot(document.getElementById('root'));


root.render(
<React.StrictMode>
    <Body/>
</React.StrictMode>
);
