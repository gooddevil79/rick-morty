import axios from "axios";
import { ENV } from "./settings";

const api = axios.create({
	baseURL: `${ENV.basePath}${ENV.apiUrl}`,
	headers: { accept: "application/json" },
});

api.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error.response);
	}
);

api.interceptors.response.use(
	({ data }) => {
		return data;
	},
	error => {
		return Promise.reject({ message: error?.message });
	}
);

const get = async (url, params = {}) => {
	return await api.get(url, { params });
};

export default {
	character: {
		list: params => {
			return get("/character", params);
		},
		select: id => {
			return get(`/character/${id}`);
		},
	},
	episode: {
		list: params => {
			return get("/episode", params);
		},
		select: id => {
			return get(`/episode/${id}`);
		},
	},
	location: {
		list: params => {
			return get("/location", params);
		},
		select: id => {
			return get(`/location/${id}`);
		},
	},
};
