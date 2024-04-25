import paths from "core/paths";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CharacterItem = function ({ character }) {
	const { id, name, species, image, status } = character;

	const badgeClass =
		status == "Alive"
			? "badge-accent"
			: status == "Dead"
				? "badge-error"
				: "badge-neutral";

	return (
		<div data-aos="fade-up">
			<Link
				className="card   md:card-compact bg-base-100 dark:bg-base-300 hover:shadow-xl shadow-md transition-shadow auto-rows-auto"
				to={`${paths.wiki.characters.root}/${id}`}
			>
				<figure className="overflow-hidden ">
					{/* <img src={image} alt={name} className="w-full" loading="lazy" /> */}
					<LazyLoadImage
						src={image}
						className="w-full  "
						width={20}
						height={20}
						loading="lazy"
						alt={name}
					/>
				</figure>
				<div className={`absolute right-4 top-4 p-4 badge ${badgeClass}`}>
					{status}
				</div>
				<div className="card-body ">
					<h2 className="card-title">{name}</h2>
				</div>
			</Link>
		</div>
	);
};

export default CharacterItem;
