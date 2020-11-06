import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Container from './styles';

const Header = () => (
	<Container>
		<AiFillGithub size={80} />
		<div className="text">
			<h1>Borders Preview</h1>
			<h2>By Lucas Santos Ribeiro</h2>
		</div>
		<AiFillLinkedin size={80} />
	</Container>
);

export default Header;
