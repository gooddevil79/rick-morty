import { Outlet } from "react-router-dom";

import Header from "components/customs/Header";
import Footer from "components/customs/Footer";
import ScrollButton from "components/customs/ScrollTopButton";
import ScrollToTop from "components/customs/ScrollToTop";

const AppLayout = function () {
	return (
		<div className="grid h-screen grid-rows-[auto_1fr_auto] ">
			<ScrollToTop />
			<Header />
			<Outlet />
			<ScrollButton />
			<Footer />
		</div>
	);
};

export default AppLayout;
