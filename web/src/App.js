import BorderPreview from './components/BorderPreview';
import Header from './components/Header';
import Options from './components/Options';
import GlobalStyles from './styles/globalStyles';

function App() {
	return (
		<>
			<GlobalStyles />
			<div className="App">
				<Header />
				<BorderPreview />
				<Options />
			</div>
		</>
	);
}

export default App;
