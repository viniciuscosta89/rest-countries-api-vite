import CountryCard from './CountryCard';
import { CountriesListContainer } from '../styles/CountriesList';
import { Country } from '../types/countryTypes';

interface CountriesListProps {
	countries: Country[];
}

const CountriesList = ({ countries }: CountriesListProps) => {
	return (
		<CountriesListContainer>
			{countries.map((country: Country) => (
				<CountryCard key={country.name} country={country} />
			))}
		</CountriesListContainer>
	);
};

export default CountriesList;
