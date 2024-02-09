// components
import { Market } from "@/components/Market";
// Styles
import { Wrapper } from "./Home.styles";
const Home = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Market />
			</div>
		</Wrapper>
	);
};

export default Home;
