import React from 'react';
import { render } from 'react-dom';
import cfgStore from "./store";
import { Provider } from "react-redux";
import App from "./App";
import simpleAction from './actions/simple';


const store = cfgStore();

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
