import { createContext, FC, useContext, useState, useEffect, useRef } from 'react';

interface CountryContextData {
	country: string;
	countries: [];
	getCountries(): void;
	getCountry(country: {}): void;
	searchCountries(country: string): void;
}

interface CountryProps {
	children?: React.ReactNode;
}

interface Country {
	capital: string;
	currencies: Currency[];
	flag: string;
	languages: Language[];
	name: string;
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	topLevelDomain: string[];
}

interface Currency {
	code: string;
	name: string;
	symbol: string;
}

interface Language {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
}

const CountryContext = createContext<CountryContextData>({} as CountryContextData);

export const useCountry = () => useContext(CountryContext);

export const CountryProvider: FC<CountryProps> = ({ children }) => {
	const [country, setCountry] = useState<string>(localStorage.getItem('country') || '');
	const [countries, setCountries] = useState<[]>([]);

	const getCountry = (country: any) => {
		const hasCountry = localStorage.getItem('country');
		console.log({ hasCountry });

		if (!hasCountry) {
			setCountry(country);
			console.log('no localStorage', country);
			localStorage.setItem('country', country);
			return;
		}

		if (!country && hasCountry) {
			setCountry(hasCountry);
			console.log('no country', hasCountry);
			return;
		}

		setCountry(country);
		console.log('country', country);
		localStorage.setItem('country', country);
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

	useEffect(() => {
		getCountry(localStorage.getItem('country'));
	}, [country]);

	const getCountries = async () => {
		const hasCountries = localStorage.getItem('countries');

		if (hasCountries) {
			setCountries(JSON.parse(hasCountries));
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

	useEffect(() => {
		getCountries();
	}, []);

	return (
		<CountryContext.Provider value={{ searchCountries, country, getCountry, countries, getCountries }}>
			{children}
		</CountryContext.Provider>
	);
};
