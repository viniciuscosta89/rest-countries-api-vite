import { createContext, FC, useContext } from 'react';
import { useCountry } from '../hooks/useCountry';
import { Country } from '../types/countryTypes';

interface CountryContextData {
	country: Country;
	countries: [];
	getCountries(): void;
	getCountry(country: {}): void;
	searchCountries(country: string): void;
	getRegionCountries(region: string): void;
}

interface CountryProps {
	children?: React.ReactNode;
}

const CountryContext = createContext<CountryContextData>({} as CountryContextData);

export const useCountryContext = () => useContext(CountryContext);

export const CountryProvider: FC<CountryProps> = ({ children }) => {
	const { country, countries, getCountries, getCountry, getRegionCountries, searchCountries } = useCountry();

	return (
		<CountryContext.Provider
			value={{ searchCountries, country, getCountry, countries, getCountries, getRegionCountries }}
		>
			{children}
		</CountryContext.Provider>
	);
};
