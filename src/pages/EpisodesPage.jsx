import Container from "components/customs/Container";
import EpisodeList from "components/features/episodes/EpisodeList";

const Episodes = function () {
	return (
		<Container>
			<div className="p-4 md:p-4">
				<EpisodeList />
			</div>
		</Container>
	);
};

export default Episodes;
