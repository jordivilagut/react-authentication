import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {Provider} from 'react-redux';
import App from './application/App';
import * as serviceWorker from './serviceWorker';
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
