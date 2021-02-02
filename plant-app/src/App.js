import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

import axios from 'axios';
function App() {
	return (
		<div className="App">
			<Navbar />

			<Switch>
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/" component={null} />
			</Switch>
		</div>
	);
}

export default App;
