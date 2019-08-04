import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {history} from "./helpers/history";
import {AppContainer} from "./containers/AppContainer";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
