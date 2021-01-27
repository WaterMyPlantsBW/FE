import './App.css';
import Navbar from './components/Navbar';

import Login from './Login'
function App() {
	return (
		<div className="App">
			<Navbar />
			<h1>Hello Plants!</h1>
			<Login/>
		</div>
	);
}

export default App;
