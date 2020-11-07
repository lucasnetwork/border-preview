import PropTypes from 'prop-types';

import InputField from '../InputField';
import Container, { OptionsContainer } from './styles';

const Options = ({ allBorderValues, bordervalues, setValue, id }) => {
	function handleBorderValue(title, value) {
		const newBorderValue = [{ ...bordervalues, [title]: value }];
		const newBorderValues = allBorderValues.map((borderValue, index) =>
			index === id ? { ...newBorderValue } : borderValue
		);
		setValue(newBorderValues);
	}
	return (
		<Container>
			{bordervalues.title && <h3>{bordervalues.title}</h3>}
			<OptionsContainer>
				<InputField
					handleChange={(e) => handleBorderValue('left', e.target.value)}
					value={bordervalues.left}
					title="Left"
				/>
				<InputField value={bordervalues.rigth} title="Rigth" />
				<InputField value={bordervalues.top} title="Top" />
				<InputField value={bordervalues.bottom} title="Bottom" />
			</OptionsContainer>
		</Container>
	);
};

Options.propTypes = {
	bordervalues: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	allBorderValues: PropTypes.array,
	setValue: PropTypes.func,
	id: PropTypes.number,
};

export default Options;
