const Select = function ({ label, options = [], name, value, onChange }) {
	return (
		<label className="grid lg:flex ">
			{label && (
				<div className="label ">
					<span className="label-text">{label}:</span>
				</div>
			)}
			<select
				className="select select-bordered flex-1"
				name={name}
				value={value}
				onChange={onChange}
			>
				<option className="hidden"></option>
				{options.map(({ disabled, value, label }) => (
					<option
						className="p-10"
						disabled={disabled}
						key={value}
						value={value}
					>
						{label}
					</option>
				))}
			</select>
		</label>
	);
};

export default Select;
