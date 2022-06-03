import { useCountry } from '../hooks/CountryContext';

import {
	CountryCardContainer,
	CountryCardDescription,
	CountryCardFlag,
	CountryCardLink,
	CountryCardList,
	CountryCardName,
} from '../styles/CountryCard';

interface CountryCardProps {
	country: Country;
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

const CountryCard = ({ country }: CountryCardProps) => {
	const { capital, flag, name, population, region } = country;

	const { getCountry } = useCountry();

	const handleCardClick = () => {
		getCountry(JSON.stringify(country));
	};

	const specialAs = /[Ááâàå]/g;

	const slug = name
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(specialAs, 'a')
		.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');

	return (
		<CountryCardLink to={`/country/${encodeURIComponent(slug)}`}>
			<CountryCardContainer onClick={handleCardClick}>
				<CountryCardFlag>
					<img
						src={flag}
						alt={`Flag of ${name}`}
					/>
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
