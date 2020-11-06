import PropTypes from 'prop-types';

import Container from './styles';

const InputField = ({ title }) => (
	<Container>
		<p>{title}</p>
		<input type="text" />
	</Container>
);

InputField.propTypes = {
	title: PropTypes.string.isRequired,
};

export default InputField;
