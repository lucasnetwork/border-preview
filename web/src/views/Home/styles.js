import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ContainerOptions = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: relative;
	.button {
		margin-left: 16px;
	}
	.option {
		margin: 0;
		margin-top: 64px;
	}
	> div {
		display: flex;
		justify-content: center;
		overflow: visible;
		flex-direction: column;
		.optionsContainerWithButton {
			display: flex;
		}
	}
	@media (max-width: 600px) {
		padding: 16px;
		width: 100%;
		.option {
			margin-top: 16px;
		}
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
