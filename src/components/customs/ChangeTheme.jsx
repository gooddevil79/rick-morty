import { useEffect, useState } from "react";

const ChangeTheme = function () {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);
	const handleToggle = e => {
		if (e.target.checked) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
		const localTheme = localStorage.getItem("theme");
		document.querySelector("html").setAttribute("data-theme", localTheme);
	}, [theme]);

	return (
		<button className="btn btn-circle btn-sm btn-ghost ">
			<label className="swap swap-rotate  ">
				<input
					type="checkbox"
					onChange={handleToggle}
					checked={theme === "light" ? false : true}
				/>
				<img
					src="/images/sun.png"
					alt="light"
					className="w-full h-auto swap-on"
				/>
				<img
					src="/images/moon.png"
					alt="dark"
					className="w-full h-auto swap-off"
				/>
			</label>
		</button>
	);
};

export default ChangeTheme;
