import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import InputField from '../InputField';
import Container, { OptionsContainer } from './styles';

const Options = forwardRef(({ bordervalues, setValue }, ref) => {
	function handleBorderValue(title, value) {
		const newBorderValue = { ...bordervalues, [title]: value };
		setValue(newBorderValue);
	}
	return (
		<Container ref={ref}>
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
});

Options.propTypes = {
	bordervalues: PropTypes.string,
	setValue: PropTypes.func,
};

export default Options;
