import PropTypes from 'prop-types';

import Container from './styles';

const InputField = ({ title, value }) => (
	<Container>
		<p>{title}</p>
		<input value={value} type="text" />
	</Container>
);

InputField.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default InputField;
