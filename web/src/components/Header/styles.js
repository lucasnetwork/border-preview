import styled from 'styled-components';

export default styled.header`
	display: flex;
	max-width: 1344px;
	margin: 0 48px;
	margin-top: 56px;
	justify-content: space-between;
	align-items: center;
	.text {
		display: flex;
		flex-direction: column;
		align-items: center;
		h1 {
			font-size: 4rem;
		}
		h2 {
			font-size: 2.25rem;
			color: #beb7a4;
		}
	}
`;
