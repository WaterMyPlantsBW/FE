import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Navbar />

			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/" component={null} />
			</Switch>
		</div>
	);
}

export default App;
