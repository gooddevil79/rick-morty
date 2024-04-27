import { Link, NavLink, useNavigate } from "react-router-dom";

const LinkItem = function ({ url = "/", children, className = "" }) {
	const navigate = useNavigate();
	const handleScroll = function (e) {
		e.preventDefault();
		// navigate("/");
		const id = e.target.getAttribute("href")?.replace("#", "");
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return url.includes("#") ? (
		<a href={url} className={className} onClick={handleScroll}>
			{children}
		</a>
	) : (
		<NavLink to={url} className={className}>
			{children}
		</NavLink>
	);
};

export default LinkItem;
