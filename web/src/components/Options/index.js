import PropTypes from 'prop-types';

import InputField from '../InputField';
import Container, { OptionsContainer } from './styles';

const Options = ({ bordervalues }) => (
	<Container>
		{bordervalues.title && <h3>{bordervalues.title}</h3>}
		<OptionsContainer>
			<InputField value={bordervalues.left} title="Left" />
			<InputField value={bordervalues.rigth} title="Rigth" />
			<InputField value={bordervalues.top} title="Top" />
			<InputField value={bordervalues.bottom} title="Bottom" />
		</OptionsContainer>
	</Container>
);

Options.propTypes = {
	bordervalues: PropTypes.string,
};

export default Options;
