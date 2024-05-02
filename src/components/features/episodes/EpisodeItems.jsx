import paths from "core/paths";
import { Link } from "react-router-dom";

const EpisodeItem = function ({ episode }) {
	const { air_date, characters, episode: episodeNum, name } = episode;
	return (
		<div className="stats  bg-base-100  hover:shadow-xl shadow-md transition-shadow">
			<div className="stat ">
				<div className="stat-title font-bold text-slate-600 text-sm ">
					{name}
				</div>
				<div className="stat-desc">{`${episodeNum}`}</div>
				<div className="stat-desc">{`Charactes: ${characters?.length} seen in this episode`}</div>
				<div className="stat-desc">{`Released: ${air_date}`}</div>
			</div>
		</div>
	);
};

export default EpisodeItem;
