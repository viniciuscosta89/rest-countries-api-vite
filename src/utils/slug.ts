const specialAs = /[Ááâàå]/g;
export const slug = (countryName: string) =>
	countryName
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(specialAs, 'a')
		.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
