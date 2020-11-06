import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';

function App() {
	return (
		<>
			<GlobalStyles />
			<div className="App">
				<Header />
				<p>Hello world</p>
			</div>
		</>
	);
}

export default App;
