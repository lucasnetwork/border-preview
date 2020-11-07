import { useState } from 'react';

import BorderPreview from '../../components/BorderPreview';
import ChangeBorderTypeButton from '../../components/ChangeBorderTypeButton';
import Header from '../../components/Header';
import Options from '../../components/Options';
import { ContainerOptions } from './styles';

const Home = () => {
	const [borderValues, setBorderValues] = useState([
		{
			left: 0,
			rigth: 0,
			top: 0,
			bottom: 0,
		},
	]);

	function addOrRemoveBorderValue() {}
	return (
		<>
			<Header />
			<BorderPreview />
			<ContainerOptions>
				<div>
					{borderValues.map((borderValue, id) => (
						<Options
							setValue={setBorderValues}
							bordervalues={borderValue}
							allBorderValues={borderValues}
							key={id}
							id={id}
						/>
					))}
				</div>
				<ChangeBorderTypeButton className="button" />
			</ContainerOptions>
		</>
	);
};

export default Home;
