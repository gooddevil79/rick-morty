import { useLocation } from "react-router-dom";

import Container from "components/customs/Container";
import LinkItem from "./LinkItem";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "./Logo";

import paths from "core/paths";
import { checkPath } from "helpers/helpers";
import ChangeTheme from "./ChangeTheme";
import { createPortal } from "react-dom";

const Header = function () {
	const { pathname } = useLocation();
	const hasPath = checkPath(pathname, "wiki");

	return (
		<header className="shadow-sm bg-base-100">
			<Container>
				<div className="navbar">
					<div className="navbar-start">
						<Logo />
					</div>
					<div className="navbar-end gap-1">
						<ul className="menu lg:menu-horizontal hidden gap-2">
							{!hasPath && (
								<li>
									<LinkItem url={"#about"}>About</LinkItem>
								</li>
							)}
							{hasPath ? (
								<>
									<li>
										<LinkItem url={paths.root}>Home</LinkItem>
									</li>
									<li>
										<LinkItem url={paths.wiki.characters.root}>
											Characters
										</LinkItem>
									</li>
									<li>
										<LinkItem url={paths.wiki.locations.root}>
											Locations
										</LinkItem>
									</li>
									<li>
										<LinkItem url={paths.wiki.episodes.root}>Episodes</LinkItem>
									</li>
								</>
							) : (
								<li>
									<LinkItem url={paths.wiki.characters.root}>Wiki</LinkItem>
								</li>
							)}
						</ul>
						<label
							htmlFor="my-drawer-4"
							aria-label="open sidebar"
							className="btn btn-circle btn-outline lg:hidden"
						>
							<HiMenuAlt1 className="text-xl" />
						</label>
						<ChangeTheme />
					</div>
				</div>
			</Container>
			{createPortal(
				<div className="drawer drawer-end fixed h-screen lg:hidden z-50 ">
					<input id="my-drawer-4" type="checkbox" className="drawer-toggle " />
					<div className="drawer-side ">
						<label
							htmlFor="my-drawer-4"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul className="menu p-4 w-80 min-h-full bg-slate-50  gap-2">
							{!hasPath && (
								<li>
									<LinkItem url={"#about"}>About</LinkItem>
								</li>
							)}
							{hasPath ? (
								<>
									<li>
										<LinkItem url={paths.root}>Home</LinkItem>
									</li>
									<li>
										<LinkItem url={paths.wiki.characters.root}>
											Characters
										</LinkItem>
									</li>
									<li>
										<LinkItem url={paths.wiki.locations.root}>
											Locations
										</LinkItem>
									</li>
									<li>
										<LinkItem url={paths.wiki.episodes.root}>Episodes</LinkItem>
									</li>
								</>
							) : (
								<li>
									<LinkItem url={paths.wiki.characters.root}>Wiki</LinkItem>
								</li>
							)}
						</ul>
					</div>
				</div>,
				document.getElementById("drawer")
			)}
		</header>
	);
};

export default Header;
