import Container from './styles';

// eslint-disable-next-line react/prop-types
const ChangeBorderTypeButton = ({ handleChange, ...rest }) => (
	<Container onClick={handleChange} {...rest}>
		<span />
	</Container>
);

export default ChangeBorderTypeButton;
