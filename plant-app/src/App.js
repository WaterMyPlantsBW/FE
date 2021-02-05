import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

import Home from './components/Home'

import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PlantList from './components/PlantList';
import Settings from './components/Settings'

function App() {
	return (
		<div className="App">
			<Navbar />

			
			

			<Switch>
				<PrivateRoute exact path="/plants" component={PlantList} />
			
				<Route exact path="/settings" component={Settings} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
