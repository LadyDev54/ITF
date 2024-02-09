// Styles
import {
	Section,
	TableData,
	TableHeader,
	TableRow,
	TableWrapper,
	Wrapper,
} from "./Market.styles";

const tableHeaders = [
	"CRYPTOS",
	"BINANCE",
	"KUKOIN",
	"OKX",
	"BITSTAMP",
	"GATE 10",
];
const data = [
	{
		id: "USDT",
		name: "$29.81B",
		age: "$29.81B",
		q: "$29.81B",
		w: "$29.81B",
		e: "$29.81B",
	},
	{
		id: "USDT",
		name: "$29.81B",
		age: "$29.81B",
		q: "$29.81B",
		w: "$29.81B",
		e: "$29.81B",
	},
	{
		id: "USDT",
		name: "$29.81B",
		age: "$29.81B",
		q: "$29.81B",
		w: "$29.81B",
		e: "$29.81B",
	},
	{
		id: "USDT",
		name: "$29.81B",
		age: "$29.81B",
		q: "$29.81B",
		w: "$29.81B",
		e: "$29.81B",
	},
	{
		id: "USDT",
		name: "$29.81B",
		age: "$29.81B",
		q: "$29.81B",
		w: "$29.81B",
		e: "$29.81B",
	},
	{
		id: "USDT",
		name: "$29.81B",
		age: "$29.81B",
		q: "$29.81B",
		w: "$29.81B",
		e: "$29.81B",
	},
	{
		id: "USDT",
		name: "$29.81B",
		age: "$29.81B",
		q: "$29.81B",
		w: "$29.81B",
		e: "$29.81B",
	},
];

const Market = () => {
	return (
		<Section>
			<Wrapper>
				<div className='info'>
					<div className='title'>
						<h2>Market Overview</h2>
					</div>
					<div className='btn'>
						<button>Trade</button>
					</div>
				</div>
				<TableWrapper>
					<TableRow>
						{tableHeaders.map(header => (
							<TableHeader key={header}>{header}</TableHeader>
						))}
					</TableRow>
					<div className='dtInfo'>
						{data.map((row, index) => (
							<TableRow key={index} className='dt'>
								{Object.values(row).map((value, index) => (
									<TableData key={index}>
										{index === 0 ? (
											<>
												<svg
													width='24'
													height='25'
													viewBox='0 0 24 25'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5Z'
														fill='#2CA37F'
													/>
													<path
														d='M13.2456 11.0228V9.60559H16.47V7.37H7.52158V9.60559H10.7544V11.0228C8.04598 11.1536 6.01318 11.6972 6.01318 12.3428C6.01318 12.9884 8.04358 13.5344 10.7544 13.6628V18.3428H13.2456V13.6628C15.954 13.5332 17.9868 12.9896 17.9868 12.3428C17.9868 11.696 15.96 11.1536 13.2456 11.0228ZM12 13.25C9.06718 13.25 6.68998 12.7964 6.68998 12.2504C6.68998 11.7812 8.42158 11.3864 10.752 11.2808V12.8816C11.1528 12.8996 11.5692 12.9104 11.9976 12.9104C12.426 12.9104 12.8448 12.8996 13.2432 12.8816V11.2808C15.5736 11.3864 17.3052 11.7812 17.3052 12.2504C17.31 12.8024 14.9328 13.25 12 13.25Z'
														fill='white'
													/>
												</svg>
												<p>{value}</p>
											</>
										) : (
											value
										)}
									</TableData>
								))}
							</TableRow>
						))}
					</div>
				</TableWrapper>
			</Wrapper>
		</Section>
	);
};

export default Market;
