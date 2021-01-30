import './App.css';

import Navbar from './components/Navbar';
<<<<<<< HEAD

=======
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
>>>>>>> main

function App() {
	return (
		<div className="App">
			<Navbar />
<<<<<<< HEAD
			
=======

			<Switch>
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/" component={null} />
			</Switch>
>>>>>>> main
		</div>
	);
}

export default App;
