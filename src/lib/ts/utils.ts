export function numberWithCommas(i: number) {
	return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function convertPercentage(i: number) {
	return i / 100;
}

// to convert interger into string with comma thousand separator
export function int2str(i: string) {
	return i.toLocaleString();
}

// to convert string into interger
export function str2num(s: string) {
	return parseFloat(s.replace(/,/g, ""));
}

// This funtion is made for allow to type only numuric and dots in input text field
export function allowDots(s: string){
	return s.replace(/([^0-9+.])/g, '');
}
