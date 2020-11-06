import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1196px;
	margin: 0 122px;
	margin-top: 64px;
	margin-bottom: 32px;
	@media (max-height: 900px) {
		margin-top: 16px;
	}
`;

export const OptionsContainer = styled.div`
	display: flex;
	height: 88px;
	width: 100%;
	background-color: #3d348b;
	justify-content: center;
	align-items: center;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 16px;
		:last-child {
			margin-right: 0;
		}
		p {
			font-size: 2.5rem;
			color: #beb7a4;
			margin-right: 8px;
		}
		input {
			height: 28px;
			max-width: 180px;
			background: #18114f;
			box-shadow: inset 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
			border: none;
			padding-left: 16px;
			color: #beb7a4;
		}
	}
`;
