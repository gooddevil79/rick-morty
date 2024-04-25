import LocationItem from "./LocationItem";
import CardSkeleton from "components/customs/CardSkeleton";

import api from "core/api";
import { useInfinitScrollingQuery } from "hooks/useInfinitScrollingQuery";

const CharactersList = function () {
	const queryFn = async function ({ pageParam = 1 }) {
		const res = api.location.list({ page: pageParam });
		return res;
	};

	const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
		useInfinitScrollingQuery(["locations"], queryFn);
	return isLoading ? (
		<CardSkeleton />
	) : (
		<>
			<div className=" grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 mx-auto">
				{data?.pages.map(({ results }) => {
					return results?.map(l => <LocationItem location={l} key={l.id} />);
				})}
			</div>
			{isFetchingNextPage && <CardSkeleton />}
			{hasNextPage && (
				<button
					className="btn btn-outline bg-secondary-content block mx-auto mt-5"
					onClick={fetchNextPage}
				>
					Load more
				</button>
			)}
		</>
	);
};

export default CharactersList;
