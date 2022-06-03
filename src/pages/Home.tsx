import CountriesList from '../components/CountriesList';
import { SearchBar } from '../components/SearchBar';
import { Container } from '../styles/Container';
import { useCountry } from '../hooks/CountryContext';

const Home = () => {
	const { countries } = useCountry();

	document.title = "Rest Countries API | Frontend Mentor Challenge"

	return (
		<>
			<Container>
				<SearchBar />

				{countries.length > 0 ? <CountriesList countries={countries} /> : <p>Loading...</p>}				
			</Container>
		</>
	);
};

export default Home;