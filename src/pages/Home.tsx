import { Helmet } from 'react-helmet-async';
import CountriesList from '../components/CountriesList';
import { SearchBar } from '../components/SearchBar';
import { Container } from '../styles/Container';
import { useCountry } from '../hooks/useCountry';
import { useEffect } from 'react';

const Home = () => {
	const { countries, getCountries } = useCountry();

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
				<SearchBar />

				{countries.length > 0 ? <CountriesList countries={countries} /> : <p>Loading...</p>}
			</Container>
		</>
	);
};

export default Home;
