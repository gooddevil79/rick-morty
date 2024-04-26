import paths from "core/paths";
import { Link } from "react-router-dom";

const Footer = function () {
	return (
		<footer className="footer  footer-center py-3 m-0 bg-slate-800 text-slate-200  ">
			<nav className="grid grid-flow-col gap-4 ">
				<Link to={paths.root} className="link text-xs md:text-md link-hover">
					Home
				</Link>
				<Link
					to={paths.wiki.characters.root}
					className="link text-xs md:text-md link-hover"
				>
					Characters
				</Link>
				<Link
					to={paths.wiki.locations.root}
					className="link text-xs md:text-md link-hover"
				>
					Locations
				</Link>
				<Link
					to={paths.wiki.episodes.root}
					className="link text-xs  md:text-md link-hover"
				>
					Episodes
				</Link>
			</nav>
			<nav>
				<div className="grid grid-flow-col gap-4">
					<img
						src="/images/ramtext.png"
						className="w-[80%] h-32 md:w-52 mx-auto"
						alt=""
					/>
				</div>
			</nav>
			<aside>
				<p>
					<span>Made by </span>
					<Link
						to="https://github.com/gooddevil79"
						className="link-hover"
						target="_blank"
					>
						Gooddevil79
					</Link>
				</p>
				<p>
					<Link
						to="https://rickandmortyapi.com/"
						className="link-hover"
						target="_blank"
					>
						rickandmortyapi.com
					</Link>
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
