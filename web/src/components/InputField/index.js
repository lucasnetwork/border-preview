import PropTypes from 'prop-types';

import Container from './styles';

const InputField = ({ title, value, handleChange }) => (
	<Container>
		<p>{title}</p>
		<input onChange={handleChange} value={value} type="text" />
	</Container>
);

InputField.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func,
};

export default InputField;
