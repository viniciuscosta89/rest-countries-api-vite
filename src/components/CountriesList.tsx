import CountryCard from './CountryCard';
import { CountriesListContainer } from '../styles/CountriesList';

interface CountriesListProps {
	countries: Country[];
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

const CountriesList = ({ countries }: CountriesListProps) => {
	return (
		<CountriesListContainer>
			{countries.map((country) => (
				<CountryCard key={country.name} country={country} />
			))}
		</CountriesListContainer>
	);
};

export default CountriesList;
