import PropTypes from 'prop-types';
import { forwardRef, useState, useEffect, useRef } from 'react';
import { RiFileCopyLine } from 'react-icons/ri';

import Container, { StylesTextContainer } from './styles';

const BorderPreview = forwardRef(({ borderText }, ref) => {
	const [copySuccess, setCopySuccess] = useState(false);
	const copySucessNotification = useRef();
	async function copyStyleValues() {
		if (!borderText) {
			return;
		}
		await navigator.clipboard.writeText(`border-radius: ${borderText}`);
		setCopySuccess(true);
	}

	useEffect(() => {
		if (copySuccess) {
			copySucessNotification.current.style.bottom = '98px';
			copySucessNotification.current.style.opacity = '1';
			setTimeout(() => {
				copySucessNotification.current.style.bottom = '40px';
				copySucessNotification.current.style.opacity = '0';
				setCopySuccess(false);
			}, 1500);
		}
	}, [copySuccess]);
	return (
		<Container>
			<span ref={copySucessNotification}>Copiado com sucesso</span>
			<div ref={ref}>
				<StylesTextContainer>
					{borderText && <p>border-radius:{borderText}</p>}
					<button
						className="copy_Button"
						type="button"
						onClick={copyStyleValues}
					>
						<RiFileCopyLine size={25} color="#eee" />
					</button>
				</StylesTextContainer>
			</div>
		</Container>
	);
});

BorderPreview.propTypes = {
	borderText: PropTypes.string,
};

export default BorderPreview;
