const formatRuntime = (runtime: number) => {
	const hours = Math.trunc(runtime / 60);
	const min = Math.floor((runtime / 60 - hours) * 60);
	return `${hours}h ${min}m`;
};

const formatNumber = (num: number) => {
	return `$${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
};

const formatLanguage = (lang: string) => {
	switch (lang) {
		case "en":
			return "English";

		default:
			break;
	}
};

export default { formatRuntime, formatNumber, formatLanguage };
