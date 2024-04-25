import { useState } from "react";

import CardSkeleton from "components/customs/CardSkeleton";
import EpisodeItem from "./EpisodeItems";

import api from "core/api";
import { useInfinitScrollingQuery } from "hooks/useInfinitScrollingQuery";

const EpisodeList = function () {
	const queryFn = async function ({ pageParam = 1 }) {
		const res = api.episode.list({ page: pageParam });
		return res;
	};
	const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
		useInfinitScrollingQuery(["episodes"], queryFn);
	return isLoading ? (
		<CardSkeleton />
	) : (
		<>
			<div className=" grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 mx-auto">
				{data?.pages.map(({ results }) => {
					return results?.map(e => <EpisodeItem episode={e} key={e.id} />);
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

export default EpisodeList;
