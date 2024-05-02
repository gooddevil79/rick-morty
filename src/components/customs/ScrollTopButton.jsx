import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 700) {
			setVisible(true);
		} else if (scrolled <= 700) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
		return () => {
			window.removeEventListener("scroll", toggleVisible);
		};
	}, []);

	return (
		<button
			className={`btn btn-ghost btn-circle fixed bottom-10 right-5 z-10 ${visible ? "animate-fadeScale" : "hidden"}`}
			onClick={scrollToTop}
		>
			<img src="/images/portal.gif" className="transition-all" alt="Up" />
		</button>
	);
};

export default ScrollButton;
