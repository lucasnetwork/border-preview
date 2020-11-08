import PropType from 'prop-types';

import Container from './styles';

const ChangeBorderTypeButton = ({ handleChange, ...rest }) => (
	<Container onClick={handleChange} {...rest}>
		<span />
	</Container>
);

ChangeBorderTypeButton.propTypes = {
	handleChange: PropType.func,
};

export default ChangeBorderTypeButton;
