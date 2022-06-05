import styled from 'styled-components';

export const CountryDetailContainer = styled.div`
	position: relative;
`;

export const CountryDetailFlag = styled.div`
	margin-block-end: 3rem;
	position: relative;

	img {
		object-fit: contain;
		object-position: top;
	}
`;

export const CountryDetailName = styled.h1`
	color: hsl(${({ theme }) => theme.colors.text});
	font-size: 1.75rem;
	font-weight: 800;
	margin-block-end: 2rem;
`

export const CountryDetailList = styled.ul`
	color: hsl(${({ theme }) => theme.colors.text});
	display: flex;
	font-weight: 300;
	flex-direction: column;
	font-size: 1rem;
	gap: 0.75rem;
	list-style: none;
	margin: 0 0 2rem;
	padding: 0;

	strong {
		font-weight: 600;
	}
`;

export const CountryDetailSubtitle = styled.h2`
	color: hsl(${({ theme }) => theme.colors.text});
	font-size: 1.25rem;
	font-weight: 600;
	margin-block-end: 2rem;
`;

export const CountryDetailBorders = styled.div`
	display: flex;
	flex-wrap: wrap;
	grid-template-columns: repeat(auto-fit, minmax(min(7rem, 100%), 1fr));
	gap: 0.5rem;

	> * {
		flex: 1 1 auto;
	}
`;