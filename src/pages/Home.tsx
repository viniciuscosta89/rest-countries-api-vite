import { Helmet } from 'react-helmet-async';
import CountriesList from '../components/CountriesList';
import { SearchBar } from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';
import { Container } from '../styles/Container';
import { Tools } from '../styles/Tools';
import { useCountryContext } from '../context/CountryContext';
import { useEffect } from 'react';

const Home = () => {
	const { countries, getCountries } = useCountryContext();

	useEffect(() => {
		getCountries();
	}, []);

	return (
		<>
			<Helmet>
				<title>Rest Countries API | Frontend Mentor Challenge</title>
				<meta name="description" content="A Frontend Mentor Challenge" />
			</Helmet>
			<Container>
				<Tools>
					<SearchBar />

					<RegionFilter label="Filter by Region" />
				</Tools>

				{countries.length > 0 ? <CountriesList countries={countries} /> : <p>Loading...</p>}
			</Container>
		</>
	);
};

export default Home;
