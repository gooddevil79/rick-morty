import { Link } from "react-router-dom";

const NotFoundPage = function () {
	return (
		<div className="bg-notFound h-dvh bg-no-repeat bg-cover bg-bottom">
			<h1 className="text-white text-4xl font-semibold bg-black left-1/2 top-10 translate-x-[-50%]    text-center  absolute ">
				404! The page you are trying to search has been <br /> moved to another
				universe.
				<br />
				<Link to="/" type="button" className="btn btn-link">
					GET ME HOME
				</Link>
			</h1>
		</div>
	);
};

export default NotFoundPage;
