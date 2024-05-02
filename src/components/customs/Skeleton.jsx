const Skeleton = function () {
	return (
		<div className="mt-10 grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 md:justify-center gap-4 mx-auto">
			<div className="card md:card-compact bg-base-100 hover:shadow-xl shadow-md min-w-[100%]   md:min-w-fit">
				<figure>
					<div className="skeleton h-32 w-full "></div>
				</figure>
			</div>
			<div className="card md:card-compact bg-base-100 hover:shadow-xl shadow-md">
				<figure>
					<div className="skeleton h-32 w-full "></div>
				</figure>
			</div>
			<div className="card hidden lg:block md:card-compact bg-base-100 hover:shadow-xl shadow-md">
				<figure>
					<div className="skeleton h-32 w-full "></div>
				</figure>
			</div>
			<div className="card hidden lg:block md:card-compact bg-base-100 hover:shadow-xl shadow-md">
				<figure>
					<div className="skeleton h-32 w-full "></div>
				</figure>
			</div>
		</div>
	);
};

export default Skeleton;
