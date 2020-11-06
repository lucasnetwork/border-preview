import styled from 'styled-components';

export default styled.div`
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
`;
