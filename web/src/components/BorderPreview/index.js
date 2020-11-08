import { forwardRef } from 'react';

import Container, { StylesTextContainer } from './styles';

const BorderPreview = forwardRef((props, ref) => (
	<Container>
		<div ref={ref}>
			<StylesTextContainer />
		</div>
	</Container>
));

export default BorderPreview;
