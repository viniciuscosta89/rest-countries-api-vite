import styled from 'styled-components';

export const CountriesListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
	gap: 3rem;
	padding-inline: 1rem;

	@media (min-width: 375px) and (max-width: 1279px) {
		padding-inline: 2rem;
	}

	@media (min-width: 1280px) {
		gap: 4rem;
		grid-template-columns: repeat(4, 1fr);
		padding-inline: 0;
	}
`;
