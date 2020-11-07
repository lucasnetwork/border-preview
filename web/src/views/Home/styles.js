import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ContainerOptions = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 64px;
	align-items: flex-start;
	justify-content: space-between;
	.button {
		margin-left: 16px;
	}
	> div {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	@media (max-width: 600px) {
		padding: 16px;
		width: 100%;
		.button {
			margin: 0;
			position: fixed;
			bottom: 16px;
			right: 16px;
		}
		> div {
			width: 100%;
		}
	}
	@media (max-height: 900px) {
		margin-top: 16px;
	}
`;
