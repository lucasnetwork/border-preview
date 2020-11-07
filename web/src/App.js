// import { useState } from 'react';

import BorderPreview from './components/BorderPreview';
import ChangeBorderTypeButton from './components/ChangeBorderTypeButton';
import Header from './components/Header';
import Options from './components/Options';
import GlobalStyles from './styles/globalStyles';

function App() {
	// const [borderValues]
	return (
		<>
			<GlobalStyles />
			<div className="App">
				<Header />
				<BorderPreview />
				<div className="c">
					<Options />
					<ChangeBorderTypeButton className="button" />
				</div>
			</div>
		</>
	);
}

export default App;
