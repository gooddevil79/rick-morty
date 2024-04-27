import { useEffect, useState } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import CharacterItem from "./CharacterItem";

import api from "core/api";
import CardSkeleton from "components/customs/CardSkeleton";
import { useLocation } from "react-router-dom";
import { getUrlParams } from "helpers/helpers";
import { useInfinitScrollingQuery } from "hooks/useInfinitScrollingQuery";
import Divider from "components/customs/Divider";
import CharactersFilterForm from "./CharactersFilterForm";
import toast, { Toaster } from "react-hot-toast";

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
		isFetching,
		error,
		status,
	} = useInfinitScrollingQuery(["characters"], queryFn);
	useEffect(() => {
		refetch();
	}, [search]);

	if (status === "error") {
		toast.error(error.message);
	}

	return (
		<>
			<CharactersFilterForm
				isLoading={isLoading}
				isFetching={isFetching}
				error={status === "error"}
			/>
			<Divider />

			{!data && status === "error" && (
				<div className="text-center">
					<p>NO RECORD FOUND</p>
					<img
						src="/images/artofFinger.png"
						className="max-w-96 h-96 mx-auto"
						alt="not found"
					/>
				</div>
			)}

			{isLoading ? (
				<CardSkeleton />
			) : (
				<>
					<div className=" grid   sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-4 mx-auto">
						{data?.pages.map(({ results }) => {
							return results?.map(c => (
								<CharacterItem character={c} key={c.id} />
							));
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
			)}
		</>
	);
};

export default CharactersList;
