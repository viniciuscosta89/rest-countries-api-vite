import { Helmet } from 'react-helmet-async';
import { useCountryContext } from '../../context/CountryContext';
import { SquaredButton } from '../../styles/Button';
import { Container } from '../../styles/Container';
import {
	CountryDetailContainer,
	CountryDetailFlag,
	CountryDetailName,
	CountryDetailList,
	CountryDetailSubtitle,
	CountryDetailBorders,
	CountryDetailBordersContainer,
	CountryDetailInfo,
} from '../../styles/CountryDetail';
import { slug } from '../../utils/slug';
import { Country } from '../../types/countryTypes';
import { useState, useEffect } from 'react';

const CountryPage = () => {
	const { country, countries, getCountry, getCountries } = useCountryContext();
	const [borderCountries, setBorderCountries] = useState<null[]>();

	const hasCountry = localStorage.getItem('country');

	if (!hasCountry) {
		window.location.href = '/';
	}

	const {
		name,
		flag,
		population,
		region,
		capital,
		nativeName,
		subregion,
		topLevelDomain,
		currencies,
		languages,
		borders,
	} = country;

	const handleBorderClick = (country: Country) => {
		getCountry(country);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		getCountries();

		const countryBorders = borders?.map((border: string) => {
			const country = countries.find((country: { alpha3Code: string }) => country.alpha3Code === border);

			return country || null;
		});

		setBorderCountries(countryBorders);
	}, [country]);

	return (
		<>
			<Helmet>
				<title>{name} - Rest Countries API | Frontend Mentor Challenge</title>
				<meta name="description" content={`A page about ${name}`} />
			</Helmet>

			<Container>
				<SquaredButton
					to="/"
					tabIndex={0}
					$marginBlockEnd="5rem"
					$marginBlockStart="2rem"
					$translateTo="translateX(-0.5rem)"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" fill="currentColor">
						<title>Arrow Back</title>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="48"
							d="M244 400L100 256l144-144M120 256h292"
						/>
					</svg>
					<span>Back</span>
				</SquaredButton>

				<CountryDetailContainer>
					<CountryDetailFlag>
						<img src={flag} alt={`${name} flag`} />
					</CountryDetailFlag>
					<div>
						<CountryDetailName>{name}</CountryDetailName>
						<CountryDetailInfo>
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
									<strong>Currencies:</strong>{' '}
									{currencies.map((currency: { name: string }) => currency.name).join(', ')}
								</li>
								<li>
									<strong>Languages:</strong> {languages.map((language: { name: string }) => language.name).join(', ')}
								</li>
							</CountryDetailList>
						</CountryDetailInfo>

						{borderCountries ? (
							<>
								<CountryDetailBordersContainer>
									<CountryDetailSubtitle>Border Countries:</CountryDetailSubtitle>
									<CountryDetailBorders>
										{borderCountries.map((country: Country | null, index: number) => {
											if (!country) return;

											return (
												<SquaredButton
													to={`/country/${slug(country.name)}`}
													$padding="0.5rem 1rem"
													$translateTo="translateY(-0.5rem)"
													onClick={() => handleBorderClick(country)}
													key={index}
												>
													{country.name}
												</SquaredButton>
											);
										})}
									</CountryDetailBorders>
								</CountryDetailBordersContainer>
							</>
						) : (
							''
						)}
					</div>
				</CountryDetailContainer>
			</Container>
		</>
	);
};

export default CountryPage;
