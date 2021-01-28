import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import PlantReg from './components/PlantReg'

function App() {
	return (
		<div className="App">
			<Navbar />
			<SignUp />
			<PlantReg/>
		</div>
	);
}

export default App;
