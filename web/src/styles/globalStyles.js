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

	html,body{
		height: 100%;
	}

	.App{
		display:flex;
		flex-direction:column;
		width:100vw;
		height:100vh;
		background-color:#E0E2DB;
		align-items:center;
		overflow:auto;
		.c{
			display:flex;
			margin-top:64px;
			justify-content:center;
			.button{
				margin-left:16px;
			}
			@media(max-height:900px){
				width:100%;
				margin-top:16px;
				
			}
		}
		@media(max-width:600px){
			padding:16px;
			width:100%;
			.c{
				width:100%;
			.button{
					margin:0;
					position:fixed;
					bottom:16px;
					right:16px;
				}
			}
		}
	}
`;
