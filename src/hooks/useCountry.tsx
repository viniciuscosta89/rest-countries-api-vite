import { useState } from 'react';
import { Country } from '../types/countryTypes';

export const useCountry = () => {
	const [country, setCountry] = useState(JSON.parse(localStorage.getItem('country') || '{}') || ({} as Country));
	const [countries, setCountries] = useState<[]>([]);

	const getCountry = (country: Country) => {
		setCountry(country);
		localStorage.setItem('country', JSON.stringify(country));
	};

	const searchCountries = (value: string) => {
		if (!value) {
			getCountries();
			return;
		}

		fetch(`https://restcountries.com/v2/name/${value}`)
			.then((res) => res.json())
			.then((data) => setCountries(data));
	};

	const getCountries = async () => {
		const hasCountries = localStorage.getItem('countries');

		if (hasCountries) {
			setCountries(JSON.parse(hasCountries) || '{}');
			return;
		}

		await fetch('https://restcountries.com/v2/all')
			.then((res) => {
				if (res.ok) {
					res.json().then((data) => {
						localStorage.setItem('countries', JSON.stringify(data));
						return setCountries(data);
					});
				} else {
					console.log('Network response was not ok.');
				}
			})
			.catch(function (error) {
				console.error('There has been a problem with your fetch operation: ' + error.message);
			});
	};

	return { country, countries, getCountry, getCountries, searchCountries };
};
