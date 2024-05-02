import Container from "components/customs/Container";
import HeroSection from "components/customs/HeroSection";
import AboutSection from "components/customs/AboutSection";

const HomePage = function () {
	return (
		<div className=" bg-slate-50 dark:bg-base-200">
			<HeroSection />
			<AboutSection />
		</div>
	);
};

export default HomePage;
