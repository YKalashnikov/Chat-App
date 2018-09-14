import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import  setupSocket  from './sockets/index';
import handleNewMessage from './sagas';
import username from './utils/name';


const sagaMiddlewarre = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddlewarre))
         
const socket = setupSocket(store.dispatch,username)

sagaMiddlewarre.run(handleNewMessage, {socket, username})

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
