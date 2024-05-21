import { FC } from "react";

import Navigation from "./Navigation";

const SideBar: FC = () => {
	return (
		<div role="complementary">
			<Navigation />
		</div>
	);
};

export default SideBar;
