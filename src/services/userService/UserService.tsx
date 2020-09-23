import fetch from "isomorphic-fetch";

const apiKey = process.env.TMDB_API_KEY;

const guestLogin = async () => {
	const url = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success) throw new Error(data.status_message);

	return data;
};

const userLogin = async () => {
	const url = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();

	if (!data.success) throw new Error(data.status_message);

	return data;
};

export default { guestLogin, userLogin };
