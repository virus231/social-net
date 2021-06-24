import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <Router>
                <App />
            </Router>
        </ChakraProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
