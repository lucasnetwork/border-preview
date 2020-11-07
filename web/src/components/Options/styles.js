import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1182px;
`;

export const OptionsContainer = styled.div`
	display: flex;
	min-height: 88px;
	width: 100%;
	background-color: #3d348b;
	justify-content: center;
	align-items: center;
	padding: 0 8px;
	margin-bottom: 16px;
	@media (max-width: 600px) {
		padding: 20px 16px;
		flex-direction: column;
	}
`;
