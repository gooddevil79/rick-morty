import { Link, NavLink, useNavigate } from "react-router-dom";

const LinkItem = function ({
	url = "/",
	children,
	className = "",
	handleScroll,
}) {
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
