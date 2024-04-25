import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutSection = function () {
	return (
		<div className="hero py-14   bg-slate-50 dark:bg-base-200" id="about">
			<div className="hero-content flex-col-reverse lg:flex-row-reverse ">
				<LazyLoadImage
					src="/images/explain.png"
					className="w-96 h-96 lg:max-w-sm"
					loading="lazy"
					alt={"rick and morty"}
				/>
				<div>
					<h1 className="text-3xl text-center lg:text-left md:text-5xl font-bold">
						What about us ?
					</h1>
					<div className="py-6 text-center lg:text-left">
						<p className="mb-3 ">
							Rick and Morty is an American adult animated science fiction
							sitcom created by Justin Roiland and Dan Harmon for Cartoon
							Network's nighttime programming block Adult Swim.
						</p>
						<p>
							The series follows the misadventures of Rick Sanchez, a cynical
							mad scientist, and his good-hearted but fretful grandson Morty
							Smith, who split their time between domestic life and
							interdimensional adventures that take place across an infinite
							number of realities, often traveling to other planets and
							dimensions through portals and on Rick's flying saucer. The
							general concept of Rick and Morty relies on two conflicting
							scenarios: domestic family drama and a misanthropic grandfather
							dragging his grandson into hijinks.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
