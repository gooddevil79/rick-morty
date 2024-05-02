const checkPath = (url, pathName) =>
	url.toLocaleLowerCase().split("/").includes("wiki");

const isArray = arr => {
	return Array.isArray(arr);
};
const isObject = obj => {
	return obj === Object(obj) && !isArray(obj) && typeof obj !== "function";
};

const getUrlParams = () => {
	const pl = /\+/g;
	const search = /([^&=]+)=?([^&]*)/g;
	const decode = s => {
		return decodeURIComponent(s.replace(pl, " "));
	};
	const query = window.location.search.substring(1);
	const urlParams = {};
	let match;

	while ((match = search.exec(query)))
		urlParams[decode(match[1])] = decode(match[2]);

	Object.keys(urlParams).map(keyName => {
		if (!isNaN(urlParams[keyName]))
			urlParams[keyName] = parseFloat(urlParams[keyName]);
	});

	return urlParams;
};

const objectToURL = obj => {
	if (isObject(obj)) {
		return Object.keys(obj)
			.filter(k => !!obj[k])
			.map(k => {
				return `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`;
			})
			.join("&");
	} else {
		return "";
	}
};
export { checkPath, objectToURL, getUrlParams };
