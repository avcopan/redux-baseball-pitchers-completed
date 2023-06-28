import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { StoreProvider } from './state/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>
);
