import styled from 'styled-components';

export default styled.main`
	width: 100%;
	max-width: 1165px;
	min-width: 379px;
	height: 100%;
	min-height: 434px;

	margin: 0 138px;
	margin-bottom: 24px;
	margin-top: 24px;
	transition: height 0.5s linear;
	> div {
		padding: 51px 107px;
		width: 100%;
		height: 100%;
		background-color: #3d348b;
	}
	@media (max-height: 900px) {
		min-height: 300px;
		> div {
			padding: 41px 97px;
		}
	}
	@media (max-width: 600px) {
		min-width: 0;
		min-height: 400px;
		margin-left: 16px;
		margin-right: 16px;
		> div {
			padding: 21px 37px;
		}
	}
`;

export const StylesTextContainer = styled.div`
	overflow-y: auto;
	display: flex;
	background-color: #18114f;
	height: 100%;
	width: 100%;
	padding: 32px;
	flex-direction: column;
	p {
		font-size: 2rem;
		color: #beb7a4;
	}
`;
