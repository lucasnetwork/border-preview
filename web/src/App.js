import BorderPreview from './components/BorderPreview';
import Header from './components/Header';
import GlobalStyles from './styles/globalStyles';

function App() {
	return (
		<>
			<GlobalStyles />
			<div className="App">
				<Header />
				<BorderPreview />
			</div>
		</>
	);
}

export default App;
