import { Link } from "react-router-dom";

import TypingAnimation from "components/customs/TypingAnimation";

import paths from "core/paths";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = function () {
	return (
		<div className="py-16 px-5 grid  items-center justify-center bg-slate-50 dark:bg-base-200">
			<div className="flex flex-col items-center lg:flex-row">
				<LazyLoadImage
					src="/images/getting-out-portal.png"
					className="mx-auto h-96 rounded-lg"
					loading="lazy"
					alt={"rick and morty"}
				/>
				<img />
				<div>
					<h1 className="text-2xl text-center md:text-left md:text-5xl font-bold">
						The Rick and Morty Wiki.
					</h1>
					<div className="py-6">
						<div className="chat chat-start" data-aos="fade-up-right">
							<div className="chat-header">Morty</div>
							<div className="chat-bubble">
								We all remember you as a friend.
							</div>
						</div>
						<div className="chat chat-end">
							<div className="chat-header">Rick</div>
							<div className="chat-bubble">
								Oh, really? <br /> Well, I remember you as a whiny little piece
								of shit, Morty.
							</div>
						</div>
						<div className="chat chat-start">
							<div className="chat-header">Morty</div>
							<div className="chat-bubble">Oh, yeah?</div>
						</div>
						<div className="chat chat-end">
							<div className="chat-bubble flex">
								<TypingAnimation />
							</div>
						</div>
					</div>
					<Link className="btn btn-primary " to={paths.wiki.episodes.root}>
						Let's see this episode
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
