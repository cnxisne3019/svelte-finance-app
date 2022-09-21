export function numberWithCommas(i: number) {
	return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function convertPercentage(i: number) {
	return i / 100;
}