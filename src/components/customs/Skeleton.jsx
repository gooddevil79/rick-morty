const Skeleton = function ({ type = "card" }) {
	return (
		<div className="mt-10 grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-4 mx-auto">
			<div className="card  md:card-compact bg-base-100 hover:shadow-xl shadow-md w-[350px] md:w-full">
				<figure>
					<div className="skeleton h-60 w-full rounded-none"></div>
				</figure>
				<div className="card-body">
					<div className="card-title skeleton h-4 w-28"></div>
				</div>
			</div>
			<div className="card hidden md:block md:card-compact bg-base-100 hover:shadow-xl shadow-md">
				<figure>
					<div className="skeleton h-60 w-full rounded-none"></div>
				</figure>
				<div className="card-body">
					<div className="card-title skeleton h-4 w-28"></div>
				</div>
			</div>
			<div className="card hidden md:block md:card-compact bg-base-100 hover:shadow-xl shadow-md">
				<figure>
					<div className="skeleton h-60 w-full rounded-none"></div>
				</figure>
				<div className="card-body">
					<div className="card-title skeleton h-4 w-28"></div>
				</div>
			</div>
			<div className="card hidden md:block md:card-compact bg-base-100 hover:shadow-xl shadow-md">
				<figure>
					<div className="skeleton h-60 w-full rounded-none"></div>
				</figure>
				<div className="card-body">
					<div className="card-title skeleton h-4 w-28"></div>
				</div>
			</div>
			<div className="card hidden md:block md:card-compact bg-base-100 hover:shadow-xl shadow-md">
				<figure>
					<div className="skeleton h-60 w-full rounded-none"></div>
				</figure>
				<div className="card-body">
					<div className="card-title skeleton h-4 w-28"></div>
				</div>
			</div>
		</div>
	);
};

export default Skeleton;
