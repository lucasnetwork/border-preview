import PropType from 'prop-types';
import { useEffect } from 'react';

import Container from './styles';

const ChangeBorderTypeButton = ({ handleChange, elipt, ...rest }) => {
	return (
		<Container elipt={elipt} onClick={handleChange} {...rest}>
			<span />
		</Container>
	);
};

ChangeBorderTypeButton.propTypes = {
	handleChange: PropType.func,
	elipt: PropType.bool,
};

export default ChangeBorderTypeButton;
