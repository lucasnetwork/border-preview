import { createGlobalStyle } from 'styled-components';

import RobotoRegular from '../fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
	@font-face {
		font-family: 'Roboto';
		src: url(${RobotoRegular}) ;
		font-weight: 400;
		font-style: normal;
  }
	*{
		margin:0;
		padding:0;
		outline:0;
		box-sizing:border-box;
		font-size:16px;
		font-family:'Roboto'
	}

	.App{
		display:flex;
		flex-direction:column;
		width:100vw;
		height:100vh;
		background-color:#E0E2DB;
	}
`;
