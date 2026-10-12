import React from "react";
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from '@reduxjs/toolkit';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
    </Provider>
    </React.StrictMode>

)
