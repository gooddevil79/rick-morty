import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Input from "components/customs/Input";
import Select from "components/customs/Select";

import { Types } from "core/settings";
import { getUrlParams, objectToURL } from "helpers/helpers";

const genderOptions = [
	{ label: "Male", value: Types.gender.male },
	{ label: "Female", value: Types.gender.female },
];
const statusOptions = [
	{ label: "Alive", value: Types.status.alive },
	{ label: "Dead", value: Types.status.dead },
	{ label: "unknown", value: Types.status.unknown },
];

const CharactersFilterForm = function () {
	const initialState = {
		name: "",
		gender: "",
		status: "",
	};

	const { pathname, search } = useLocation();
	const navigate = useNavigate();
	const [values, setValues] = useState(initialState);

	const onChangeForm = function (e) {
		setValues(ps => ({ ...ps, [e.target.name]: e.target.value }));
	};
	const handleSubmit = e => {
		e.preventDefault();
		navigate(`${pathname}?${objectToURL(values)}`);
	};
	const handleReset = () => {
		setValues({ name: "", gender: "", status: "" });
		navigate(`${pathname}?${objectToURL({})}`);
	};

	useEffect(() => {
		const urlParams = getUrlParams();
		setValues(ps => ({
			name: urlParams.name || ps.name,
			gender: urlParams.gender || ps.gender,
			status: urlParams.status || ps.status,
		}));
	}, [search]);

	return (
		<form
			className="grid gap-2 md:grid-cols-1 lg:grid-cols-[1fr_1fr_200px] items-center"
			onSubmit={handleSubmit}
			onReset={handleReset}
		>
			<Input
				label="Search"
				name="name"
				onChange={onChangeForm}
				value={values.search}
			/>

			<div className="grid md:grid-cols-2 gap-2">
				<Select
					label="Gender"
					name="gender"
					options={genderOptions}
					onChange={onChangeForm}
					value={values?.gender}
				/>
				<Select
					label="Status"
					name="status"
					options={statusOptions}
					value={values?.status}
					onChange={onChangeForm}
				/>
			</div>
			<div className="flex gap-1 flex-col lg:flex-row">
				<button className="btn btn-neutral  flex-1" type="submit">
					Filter
				</button>
				<button
					className="btn btn-sm lg:btn-md btn-outline hover:bg-slate-300"
					type="reset"
				>
					Clear
				</button>
			</div>
		</form>
	);
};

export default CharactersFilterForm;
