import styled, { css } from 'styled-components';

export default styled.button`
	width: 88px;
	height: 88px;
	background-color: #3d348b;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: filter 0.2s linear;
	:hover {
		filter: brightness(80%);
	}
	:active {
		filter: brightness(70%);
	}
	span {
		display: block;
		width: 66px;
		height: 66px;
		border: 6px solid #18114f;
		box-sizing: border-box;
		border-radius: 50%;
		transition: height 0.2s linear;
	}
	${({ elipt }) =>
		elipt &&
		css`
			span {
				width: 66px;
				height: 38px;
			}
		`}
`;
