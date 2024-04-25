import paths from "core/paths";
import { Link } from "react-router-dom";

const CharacterItem = function ({ location }) {
	const { id, name, type, dimension, residents, created } = location;
	return (
		<div className="stats  bg-base-100 hover:shadow-xl shadow-md transition-shadow">
			<div className="stat ">
				<div className="stat-title font-bold text-slate-600 text-sm ">
					{name}
				</div>
				<div className="stat-desc">{`Residents: ${residents?.length}`}</div>
				<div className="stat-desc">{`Dimension: ${dimension}`}</div>
				<div className="stat-desc">{`Type: ${type}`}</div>
			</div>
		</div>
	);
};

export default CharacterItem;
