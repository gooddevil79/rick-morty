import CharactersList from "components/features/characters/CharactersList";
import Container from "components/customs/Container";
import CharactersFilterForm from "components/features/characters/CharactersFilterForm";
import Divider from "components/customs/Divider";

const Characters = function () {
	return (
		<Container>
			<div className="p-4 md:p-4">
				<CharactersList />
			</div>
		</Container>
	);
};

export default Characters;
