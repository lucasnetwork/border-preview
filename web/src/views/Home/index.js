import BorderPreview from '../../components/BorderPreview';
import ChangeBorderTypeButton from '../../components/ChangeBorderTypeButton';
import Header from '../../components/Header';
import Options from '../../components/Options';
import { ContainerOptions } from './styles';

const Home = () => (
	<>
		<Header />
		<BorderPreview />
		<ContainerOptions>
			<div>
				<Options />
				<Options />
			</div>
			<ChangeBorderTypeButton className="button" />
		</ContainerOptions>
	</>
);

export default Home;
