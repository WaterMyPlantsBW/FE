import './App.css';

import Navbar from './components/Navbar';

import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
	return (
		<div className="App">
			<Navbar />
			

			<Switch>
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/" component={null} />
			</Switch>
		</div>
	);
}

export default App;
