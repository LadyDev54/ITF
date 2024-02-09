import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	margin-top: 16px;
`;

export const Wrapper = styled.div`
	max-width: 901px;
	width: 100%;
	.info {
		padding: 12px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.btn {
			button {
				border-radius: 60px;
				background: #6639e4;
				width: 120px;
				height: 43px;
				font-weight: 500;
				font-size: 16px;
				line-height: 180%;
				color: #fff;
			}
		}
	}
`;

export const TableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-radius: 20px;
	padding: 20px 32px;
	background: #1d1a3d;
	.dtInfo {
		margin-top: 16px;
		.dt {
			&:not(:last-child) {
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			}
		}
	}
`;

export const TableRow = styled.div`
	display: flex;
`;

export const TableHeader = styled.div`
	flex: 1;
	padding: 10px;
	font-weight: bold;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	padding: 0px 0px 16px 0px;
	font-weight: 600;
	font-size: 16px;
	line-height: 180%;
	letter-spacing: 0.06em;
	color: #6639e4;
`;

export const TableData = styled.div`
	flex: 1;
	padding: 16px 0px;
	font-weight: 500;
	font-size: 16px;
	line-height: 180%;
	color: #fff;
	display: flex;
	align-items: center;
	column-gap: 8px;
`;
