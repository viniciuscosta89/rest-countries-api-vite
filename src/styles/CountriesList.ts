import styled from 'styled-components';

export const CountriesListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
	gap: 3rem;
	padding-inline: 1rem;
	
	@media (min-width: 425px) {
		padding-inline: 2rem;
	}
`;
