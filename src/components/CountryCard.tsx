import { useCountryContext } from '../context/CountryContext';
import {
	CountryCardContainer,
	CountryCardDescription,
	CountryCardFlag,
	CountryCardLink,
	CountryCardList,
	CountryCardName,
} from '../styles/CountryCard';
import { slug } from '../utils/slug';
import { Country } from '../types/countryTypes';

interface CountryCardProps {
	country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
	const { name, flag, population, region, capital } = country;

	const { getCountry } = useCountryContext();

	const handleCardClick = () => {
		getCountry(country);
	};

	return (
		<article id={slug(name)}>
			<CountryCardLink to={`/country/${encodeURIComponent(slug(name))}`}>
				<CountryCardContainer onClick={handleCardClick}>
					<CountryCardFlag>
						<img src={flag} alt={`Flag of ${name}`} loading="lazy" />
					</CountryCardFlag>

					<CountryCardDescription>
						<CountryCardName>{name}</CountryCardName>
						<CountryCardList>
							<li>
								<strong>Population:</strong> {new Intl.NumberFormat('en-US').format(population)}
							</li>
							<li>
								<strong>Region:</strong> {region}
							</li>
							<li>
								<strong>Capital:</strong> {capital}
							</li>
						</CountryCardList>
					</CountryCardDescription>
				</CountryCardContainer>
			</CountryCardLink>
		</article>
	);
};

export default CountryCard;
