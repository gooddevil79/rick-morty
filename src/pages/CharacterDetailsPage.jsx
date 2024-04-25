import { useQuery } from "@tanstack/react-query";
import api from "core/api";
import { useNavigate, useParams } from "react-router-dom";

const CharacterDetails = function () {
	const { id } = useParams();
	const navigate = useNavigate();

	const queryFn = async () => {
		const res = await api.character.select(id);

		return res;
	};
	const { data } = useQuery({ queryKey: ["characters", id], queryFn });

	return (
		<>
			<div
				className="btn btn-circle left-4 ml-3 mt-3"
				onClick={() => {
					navigate(-1);
				}}
			>
				Go Back
			</div>
			<div className="grid  p-2 gap-5 ">
				<div className="stats stats-vertical lg:stats-horizontal shadow w-full">
					<div className="stat ">
						<div className="avatar flex-col gap-2 ">
							<div className="w-60 h-60 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
								<img src={data?.image} />
							</div>
							<h1 className="text-center  text-2xl font-semibold">
								{data?.name}
							</h1>
						</div>
					</div>
					<div className="stats stats-vertical rounded-none">
						<div className="stat">
							<div className="stat-title">Species</div>
							<p className="stat-value text-xl">{data?.species}</p>
						</div>
						<div className="stat">
							<div className="stat-title">Gender</div>
							<p className="stat-value text-xl">{data?.gender}</p>
						</div>
						<div className="stat">
							<div className="stat-title">Total Episodes</div>
							<div className="stat-value text-xl">{data?.episode?.length}</div>
							<div className="stat-desc">
								episodes in which this character appeared.
							</div>
						</div>

						<div className="stat">
							<div className="stat-title">Last Seen</div>
							<div className="stat-value text-xl">{data?.location?.name}</div>
							<div className="stat-desc">last known location endpoint.</div>
						</div>

						<div className="stat">
							<div className="stat-title">Origin</div>
							<div className="stat-value text-xl">{data?.origin.name}</div>
							<div className="stat-desc">character's origin location</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CharacterDetails;
