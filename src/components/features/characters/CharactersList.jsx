import { useEffect, useState } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import CharacterItem from "./CharacterItem";

import api from "core/api";
import CardSkeleton from "components/customs/CardSkeleton";
import { useLocation } from "react-router-dom";
import { getUrlParams } from "helpers/helpers";
import { useInfinitScrollingQuery } from "hooks/useInfinitScrollingQuery";

const CharactersList = function () {
	const { search } = useLocation();

	const queryFn = async function ({ pageParam = 1 }) {
		const urlParams = getUrlParams();
		const res = await api.character.list({ page: pageParam, ...urlParams });

		return res;
	};

	const {
		data,
		fetchNextPage,
		isLoading,
		isFetchingNextPage,
		hasNextPage,
		refetch,
	} = useInfinitScrollingQuery(["characters"], queryFn);
	useEffect(() => {
		refetch();
	}, [search]);

	return isLoading ? (
		<CardSkeleton />
	) : (
		<>
			<div className=" grid  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-4 mx-auto">
				{data?.pages.map(({ results }) => {
					return results?.map(c => <CharacterItem character={c} key={c.id} />);
				})}
			</div>
			{isFetchingNextPage && <CardSkeleton />}
			{hasNextPage && (
				<button
					className="btn btn-outline bg-secondary-content  block mx-auto mt-5"
					onClick={fetchNextPage}
				>
					Load more
				</button>
			)}
		</>
	);
};

export default CharactersList;
