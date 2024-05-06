import LocationItem from "./LocationItem";
import Skeleton from "components/customs/Skeleton";
import toast from "react-hot-toast";

import api from "core/api";
import { useInfinitScrollingQuery } from "hooks/useInfinitScrollingQuery";

const CharactersList = function () {
	const queryFn = async function ({ pageParam = 1 }) {
		const res = api.location.list({ page: pageParam });
		return res;
	};

	const {
		data,
		fetchNextPage,
		isLoading,
		isFetchingNextPage,
		hasNextPage,
		status,
		error,
	} = useInfinitScrollingQuery(["locations"], queryFn);

	if (status === "error") {
		toast.error(error.message);
	}

	return (
		<>
			{!data && status === "error" && (
				<div className=" flex flex-col items-center justify-center">
					<p>NO DATA TO SHOW</p>
					<img
						src="/images/artofFinger.png"
						className="max-w-86 h-96 mx-auto"
						alt="not found"
					/>
				</div>
			)}
			{isLoading ? (
				<Skeleton />
			) : (
				<>
					<div className=" grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 mx-auto">
						{data?.pages.map(({ results }) => {
							return results?.map(l => (
								<LocationItem location={l} key={l.id} />
							));
						})}
					</div>
					{isFetchingNextPage && <Skeleton />}
					{hasNextPage && (
						<button
							className="btn btn-outline bg-secondary-content block mx-auto mt-5"
							onClick={fetchNextPage}
						>
							Load more
						</button>
					)}
				</>
			)}
		</>
	);
};

export default CharactersList;
