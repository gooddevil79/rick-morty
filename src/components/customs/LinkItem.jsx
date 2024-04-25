import { Link, NavLink, useNavigate } from "react-router-dom";

const LinkItem = function ({ url = "/", children }) {
	const navigate = useNavigate();
	const handleScroll = function (e) {
		e.preventDefault();
		// navigate("/");
		const id = e.target.getAttribute("href")?.replace("#", "");
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return url.includes("#") ? (
		<a href={url} onClick={handleScroll}>
			{children}
		</a>
	) : (
		<NavLink to={url}>{children}</NavLink>
	);
};

export default LinkItem;
