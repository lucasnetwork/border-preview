import styled from 'styled-components';

export default styled.main`
	width: 100%;
	max-width: 1165px;
	min-width: 379px;
	height: 100%;
	min-height: 434px;
	max-height: 642px;
	background-color: #3d348b;
	margin: 0 138px;
	margin-top: 24px;
	padding: 51px 107px;
	@media (max-height: 900px) {
		min-height: 300px;
		padding: 41px 97px;
	}
	@media (max-width: 600px) {
		min-width: 0;
		min-height: 800px;
		padding: 21px 37px;
		margin-left: 16px;
		margin-right: 16px;
	}
`;

export const StylesTextContainer = styled.div`
	display: flex;
	background-color: #18114f;
	height: 100%;
	width: 100%;
`;
