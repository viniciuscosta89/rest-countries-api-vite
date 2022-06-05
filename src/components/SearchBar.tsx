import { SearchContainer } from '../styles/SearchBar';
import { useCountry } from '../hooks/useCountry';

export const SearchBar = () => {
	const { searchCountries } = useCountry();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		searchCountries(event.target.value);
	};
	return (
		<SearchContainer>
			<svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
				<title>Search</title>
				<path d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z" />
			</svg>
			<input type="search" placeholder="Search for a country..." onBlur={handleChange} />
		</SearchContainer>
	);
};
