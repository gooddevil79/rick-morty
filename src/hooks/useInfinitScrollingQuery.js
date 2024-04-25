import { useInfiniteQuery } from "@tanstack/react-query";

export const useInfinitScrollingQuery = function (queryKey, queryFn) {
	return useInfiniteQuery({
		queryKey,
		queryFn,
		getNextPageParam: ({ info, results }, allPages) => {
			const maxPages = info.pages;
			const nextPage = allPages.length + 1;
			return nextPage <= maxPages ? allPages.length + 1 : undefined;
		},
	});
};
