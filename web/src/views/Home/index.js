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
		title: 'Primeiro Raio',
		left: '',
		right: '',
		top: '',
		bottom: '',
	});
	const [borderValuesTwo, setBorderValuesTwo] = useState({
		title: 'Segundo Raio',
		left: '',
		right: '',
		top: '',
		bottom: '',
	});
	const [borderText, setBorderText] = useState('');
	const [elipt, setElipt] = useState(false);

	useEffect(() => {
		if (elipt) {
			BorderPreviewRef.current.style.borderRadius = `
			${borderValues.top || borderValues.left || 0}px 
			${borderValues.right || borderValues.left || 0}px 
			${borderValues.bottom || borderValues.left || 0}px 
			${borderValues.left || 0}px / 
			
			${borderValuesTwo.top || borderValues.top || borderValuesTwo.left || 0}px 
			${borderValuesTwo.right || borderValues.right || borderValuesTwo.left || 0}px 
			${borderValuesTwo.bottom || borderValues.bottom || borderValuesTwo.left || 0}px 
			${borderValuesTwo.left || borderValues.left || 0}px`;
		} else {
			BorderPreviewRef.current.style.borderRadius = `
			${borderValues.top || borderValues.left || 0}px 
			${borderValues.right || borderValues.left || 0}px 
			${borderValues.bottom || borderValues.left || 0}px 
			${borderValues.left || 0}px`;
		}
		setBorderText(
			BorderPreviewRef.current.style.borderRadius === '0px'
				? ''
				: BorderPreviewRef.current.style.borderRadius
		);
	}, [borderValues, borderValuesTwo, elipt]);

	useEffect(() => {
		if (elipt && window.innerWidth > 600) {
			BorderPreviewRef.current.style.transition = 'height 0.2s linear';
			BorderPreviewRef.current.style.height = '77%';
			optionsOne.current.style.transition = 'transform 0.2s linear';
			optionsOne.current.style.transform = 'translateY(-100%)';
			optionsTwo.current.style.transition =
				'transform 0.2s linear, opacity 0.4s linear';
			optionsTwo.current.style.opacity = '1';
			optionsTwo.current.style.transform = 'translateY(0)';
		} else if (elipt && window.innerWidth < 600) {
			optionsTwo.current.style.opacity = '1';
			optionsTwo.current.style.display = 'flex';
			optionsTwo.current.style.position = 'static';
			optionsTwo.current.style.transform = 'translateY(0)';
		} else if (window.innerWidth < 600) {
			optionsTwo.current.style.display = 'none';
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
			<BorderPreview
				ref={BorderPreviewRef}
				borderValues={[borderValues, borderValuesTwo]}
				borderText={borderText}
			/>
			<ContainerOptions>
				<div>
					<div className="optionsContainerWithButton" ref={optionsOne}>
						<Options
							type={elipt}
							className="option"
							setValue={setBorderValues}
							bordervalues={borderValues}
						/>
						<ChangeBorderTypeButton
							elipt={elipt}
							handleChange={() => setElipt(!elipt)}
							className="button"
						/>
					</div>

					<Options
						type={elipt}
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
