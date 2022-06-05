import { useCountry } from '../hooks/useCountry';
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

	const { getCountry } = useCountry();

	const handleCardClick = () => {
		getCountry(country);
	};

	return (
		<CountryCardLink to={`/country/${encodeURIComponent(slug(name))}`}>
			<CountryCardContainer onClick={handleCardClick}>
				<CountryCardFlag>
					<img src={flag} alt={`Flag of ${name}`} />
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
	);
};

export default CountryCard;
