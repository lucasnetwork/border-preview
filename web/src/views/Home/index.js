import { useState, useRef, useEffect } from 'react';

import BorderPreview from '../../components/BorderPreview';
import ChangeBorderTypeButton from '../../components/ChangeBorderTypeButton';
import Header from '../../components/Header';
import Options from '../../components/Options';
import { ContainerOptions } from './styles';

const Home = () => {
	const BorderPreviewRef = useRef();
	const optionsOne = useRef();
	const optionsTwo = useRef();
	const [borderValues, setBorderValues] = useState({
		left: '',
		rigth: '',
		top: '',
		bottom: '',
	});
	const [borderValuesTwo, setBorderValuesTwo] = useState({
		left: '',
		rigth: '',
		top: '',
		bottom: '',
	});
	const [elipt, setElipt] = useState(false);

	useEffect(() => {
		BorderPreviewRef.current.style.borderRadius = `
		${borderValues.top || 0}px 
		${borderValues.rigth || 0}px 
		${borderValues.bottom || 0}px 
		${borderValues.left || 0}px / 
		
		${borderValuesTwo.top || borderValues.top || 0}px 
		${borderValuesTwo.rigth || borderValues.rigth || 0}px 
		${borderValuesTwo.bottom || borderValues.bottom || 0}px 
		${borderValuesTwo.left || borderValues.left || 0}px`;
	}, [borderValues, borderValuesTwo]);

	useEffect(() => {
		if (elipt) {
			BorderPreviewRef.current.style.transition = 'height 0.2s linear';
			BorderPreviewRef.current.style.height = '77%';
			optionsOne.current.style.transition = 'transform 0.2s linear';
			optionsOne.current.style.transform = 'translateY(-100%)';
			optionsTwo.current.style.transition =
				'transform 0.2s linear, opacity 0.4s linear';
			optionsTwo.current.style.opacity = '1';
			optionsTwo.current.style.transform = 'translateY(0)';
		} else {
			BorderPreviewRef.current.style.height = '100%';
			optionsOne.current.style.transform = 'translateY(0)';
			optionsTwo.current.style.transform = 'translateY(100%)';
			optionsTwo.current.style.opacity = '0';
		}
	}, [elipt]);
	useEffect(() => {
		optionsTwo.current.style.position = 'absolute';
		optionsTwo.current.style.opacity = '0';
		optionsTwo.current.style.transform = 'translateY(100%)';
	}, []);
	return (
		<>
			<Header />
			<BorderPreview ref={BorderPreviewRef} />
			<ContainerOptions>
				<div>
					<div className="optionsContainerWithButton" ref={optionsOne}>
						<Options
							className="option"
							setValue={setBorderValues}
							bordervalues={borderValues}
						/>
						<ChangeBorderTypeButton
							handleChange={() => setElipt(!elipt)}
							className="button"
						/>
					</div>

					<Options
						ref={optionsTwo}
						className="option"
						setValue={setBorderValuesTwo}
						bordervalues={borderValuesTwo}
					/>
				</div>
			</ContainerOptions>
		</>
	);
};

export default Home;
