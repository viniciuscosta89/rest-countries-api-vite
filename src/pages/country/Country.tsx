import { useCountry } from '../../hooks/CountryContext';
import { BackButton } from '../../styles/Button';
import { Container } from '../../styles/Container';
import { CountryDetailContainer, CountryDetailFlag, CountryDetailName, CountryDetailList } from '../../styles/CountryDetail';

const Country = () => {
	const { country } = useCountry();

	const { name, flag, population, region, capital, nativeName, subregion, topLevelDomain, currencies, languages } = JSON.parse(country);

	document.title = `${name} | Rest Countries API | Frontend Mentor Challenge`;

	return (
		<>
			<Container>
				<BackButton to="/" tabIndex={0}>
					<svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" fill="currentColor"><title>Arrow Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
					<span>Back</span>
				</BackButton>
				<CountryDetailContainer>
					<CountryDetailFlag>
						<img src={flag} alt={`${name} flag`} />
					</CountryDetailFlag>
					<CountryDetailName>{name}</CountryDetailName>
					<CountryDetailList>
						<li>
							<strong>Native Name:</strong> {nativeName}
						</li>
						<li>
							<strong>Population:</strong> {new Intl.NumberFormat('en-US').format(population)}
						</li>
						<li>
							<strong>Region:</strong> {region}
						</li>
						<li>
							<strong>Sub Region:</strong> {subregion}
						</li>
						<li>
							<strong>Capital:</strong> {capital}
						</li>
					</CountryDetailList>

					<CountryDetailList>
						<li>
							<strong>Top Level Domain:</strong> {topLevelDomain}
						</li>
						<li>
							<strong>Currencies:</strong> {currencies.map((currency: { name: string; }) => currency.name).join(', ')}
						</li>
						<li>
							<strong>Languages:</strong> {languages.map((language: { name: string; }) => language.name).join(', ')}
						</li>
					</CountryDetailList>
				</CountryDetailContainer>
			</Container>
		</>
	);
};

export default Country;