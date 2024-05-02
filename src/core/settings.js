const ENV = {
	apiUrl: "/api/",
	basePath: "https://rickandmortyapi.com",
	dateFormat: "YYYY-MM-DD",
	dateTimeFormat: "YYYY-MM-DD HH:mm",
	devMode: import.meta.env.DEV,
	pageSize: 50,
	timeFormat: "HH:mm",
};

const Modals = {
	CREATE: "CREATE",
	EDIT: "EDIT",
	ROLE: "ROLE",
	VIEW: "VIEW",
};

const Status = {
	default: { active: "active", inactive: "inactive" },
};

const Types = {
	age: {
		child: "Child",
		middleAge: "MiddleAge",
		old: "Old",
		young: "Young",
		teenage: "Teenage",
	},
	gender: {
		male: "male",
		female: "female",
		genderless: "genderless",
		unknown: "unknown",
	},
	status: { alive: "alive", dead: "dead", unknown: "unknown" },
};

export { ENV, Modals, Status, Types };
