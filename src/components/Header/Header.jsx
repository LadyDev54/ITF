// Styles

import { navigationData } from "@/data";
import { NavLink } from "react-router-dom";
import { HeaderTag, HeaderWrapper, Menu } from "./Header.styles";
const Header = () => {
	return (
		<HeaderTag>
			<div className='container'>
				<HeaderWrapper>
					<Menu>
						<ul>
							{navigationData?.map(menu => {
								return (
									<li key={menu.title}>
										<NavLink to={menu.path}>{menu.title}</NavLink>
									</li>
								);
							})}
						</ul>
					</Menu>
				</HeaderWrapper>
			</div>
		</HeaderTag>
	);
};

export default Header;
