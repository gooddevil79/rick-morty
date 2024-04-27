import { Link } from "react-router-dom";

import TypingAnimation from "components/customs/TypingAnimation";

import paths from "core/paths";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "./Container";

const HeroSection = function () {
	return (
		<Container>
			<div className=" hero-content mx-auto py-16 px-5 flex items-center   flex-col  lg:flex-row">
				<LazyLoadImage
					src="/images/getting-out-portal.png"
					className="mx-auto  h-96 rounded-lg "
					loading="lazy"
					alt={"rick and morty"}
				/>
				<div className="lg:w-[60%]">
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
					<Link
						className="btn w-full lg:w-auto btn-primary "
						to={paths.wiki.episodes.root}
					>
						Let's see this episode
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default HeroSection;
