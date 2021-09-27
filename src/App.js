import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Doctors from './components/Doctors/Doctors';

function App() {	
	return (
		<div className="App">
			<Header />
			<Doctors />
		</div>
	);
}

export default App;
