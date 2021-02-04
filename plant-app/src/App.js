import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Home from './components/Home'
=======
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PlantList from './components/PlantList';
>>>>>>> 7f5970cc433a3e3a08a71fdc25fe6603bbc43b3a

function App() {
	return (
		<div className="App">
			<Navbar />
<<<<<<< HEAD
			<Home />
=======

			<Switch>
				<PrivateRoute exact path="/plants" component={PlantList} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/" component={null} />
			</Switch>
>>>>>>> 7f5970cc433a3e3a08a71fdc25fe6603bbc43b3a
		</div>
	);
}

export default App;
