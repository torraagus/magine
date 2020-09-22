const formatRuntime = (runtime: number) => {
	const hours = Math.trunc(runtime / 60);
	const min = Math.floor((runtime / 60 - hours) * 60);
	console.log(min);
	return `${hours}h ${min}m`;
};

export default { formatRuntime };
