import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { customTheme } from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';

// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './index.scss';

const options = {
    timeout: 5000,
    position: positions.BOTTOM_LEFT,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={customTheme}>
            <Provider template={AlertTemplate} {...options}>
                <CssBaseline />
                <BrowserRouter>
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
