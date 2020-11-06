import PropTypes from 'prop-types';

import InputField from '../InputField';
import Container, { OptionsContainer } from './styles';

const Options = ({ title }) => (
	<Container>
		{title && <h3>{title}</h3>}
		<OptionsContainer>
			<InputField title="Left" />
			<InputField title="Rigth" />
			<InputField title="Top" />
			<InputField title="Bottom" />
		</OptionsContainer>
	</Container>
);

Options.propTypes = {
	title: PropTypes.string,
};

export default Options;
