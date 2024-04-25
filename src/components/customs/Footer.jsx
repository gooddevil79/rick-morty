import paths from "core/paths";
import { Link } from "react-router-dom";

const Footer = function () {
	return (
		<>
			<footer className="footer  footer-center p-10 bg-slate-800 text-slate-200  ">
				<nav className="grid grid-flow-col gap-4">
					<Link to={paths.root} className="link link-hover">
						Home
					</Link>
					<Link to={paths.wiki.characters.root} className="link link-hover">
						Characters
					</Link>
					<Link to={paths.wiki.locations.root} className="link link-hover">
						Locations
					</Link>
					<Link to={paths.wiki.episodes.root} className="link link-hover">
						Episodes
					</Link>
				</nav>
				<nav>
					<div className="grid grid-flow-col gap-4">
						<img src="/images/getting-out-portal.png" className="w-52" alt="" />
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
		</>
	);
};

export default Footer;
