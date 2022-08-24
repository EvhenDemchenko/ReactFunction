import React from 'react';
import ReactDOM from 'react-dom/client';
import Wrapper from './wrapper/wrapper';
import ErrorBoundary from "./errorBoundary/errorBoundary";
import Context from "./context/context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <Context>
            <Wrapper/>
        </Context>
    </ErrorBoundary>
)


