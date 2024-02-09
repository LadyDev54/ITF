import styled from "styled-components";

export const HeaderTag = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	margin-top: 24px;
	border-bottom: 2px solid rgba(255, 255, 255, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Menu = styled.nav`
	text-align: center;
	ul {
		display: flex;
		li {
			a {
				position: relative;
				display: inline-block;
				padding: 23px 20px;
				font-weight: 500;
				font-size: 16px;
				line-height: 180%;
				color: var(--grey);
				transition: all 0.3s ease;
				&.active {
					&::after {
						content: "";
						height: 2px;
						position: absolute;
						left: 0px;
						bottom: -2px;
						width: 100%;
						border-bottom: 2px solid var(--bluishPurple);
					}
					color: var(--bluishPurple);
				}
			}
		}
	}
`;
