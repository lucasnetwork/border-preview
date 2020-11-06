import Container from './styles';

const InputField = ({ title }) => (
	<Container>
		<p>{title}</p>
		<input type="text" />
	</Container>
);

export default InputField;
