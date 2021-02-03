import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import createBrowserHistory from 'history/createBrowserHistory';

import thunk from 'redux-thunk';
import appReducer from './reducers';

const store = createStore(appReducer, applyMiddleware(thunk));

// export const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
