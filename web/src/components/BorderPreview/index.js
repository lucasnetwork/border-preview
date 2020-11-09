import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Container, { StylesTextContainer } from './styles';

const BorderPreview = forwardRef(({ borderText }, ref) => {
	return (
		<Container>
			<div ref={ref}>
				<StylesTextContainer>
					{borderText && <p>border-radius:{borderText}</p>}
				</StylesTextContainer>
			</div>
		</Container>
	);
});

BorderPreview.propTypes = {
	borderText: PropTypes.string,
};

export default BorderPreview;
