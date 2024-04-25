import Container from "components/customs/Container";
import Divider from "components/customs/Divider";
import Input from "components/customs/Input";
import LocationsList from "components/features/locations/LocationsList";

const LocationsPage = function () {
	return (
		<Container>
			<div className="p-4 md:p-4">
				<LocationsList />
			</div>
		</Container>
	);
};

export default LocationsPage;
