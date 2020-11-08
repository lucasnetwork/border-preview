import { useState } from 'react';

import BorderPreview from '../../components/BorderPreview';
import ChangeBorderTypeButton from '../../components/ChangeBorderTypeButton';
import Header from '../../components/Header';
import Options from '../../components/Options';
import { ContainerOptions } from './styles';

const Home = () => {
	const [borderValues, setBorderValues] = useState([
		{
			left: '',
			rigth: '',
			top: '',
			bottom: '',
		},
	]);

	function addOrRemoveBorderValue() {
		if (borderValues.length < 2) {
			setBorderValues([
				{ ...borderValues, title: 'Primeiro Raio' },
				{ left: '', rigth: '', top: '', bottom: '', title: 'Segundo Raio' },
			]);
		} else {
			const value = {
				left: borderValues[0].left,
				rigth: borderValues[0].rigth,
				top: borderValues[0].top,
				bottom: borderValues[0].bottom,
			};
			setBorderValues([value]);
		}
	}
	return (
		<>
			<Header />
			<BorderPreview />
			<ContainerOptions>
				<div>
					{borderValues.map((borderValue, id) => (
						<Options
							className="option"
							setValue={setBorderValues}
							bordervalues={borderValue}
							allBorderValues={borderValues}
							key={id}
							id={id}
						/>
					))}
				</div>
				<ChangeBorderTypeButton
					handleChange={addOrRemoveBorderValue}
					className="button"
				/>
			</ContainerOptions>
		</>
	);
};

export default Home;
