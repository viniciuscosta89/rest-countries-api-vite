import styled from 'styled-components';
import { Link } from "react-router-dom";

export const CountryCardLink = styled(Link)`
	background-color: hsl(${({ theme }) => theme.colors.elements});
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.075);
	display: block;
	text-decoration: none;
	transition: var(--transition);

	@media (min-width: 1280px) {
		border-radius: 0.25rem;
	}

	&:hover {
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.075);
		cursor: pointer;
		transform: translateY(-0.5rem);
	}
`;

export const CountryCardContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CountryCardFlag = styled.picture`
	border-radius: 0.5rem 0.5rem 0 0;
	overflow: hidden;
	position: relative;
	width: 100%;

	@media (min-width: 1280px) {
		border-radius: 0.25rem 0.25rem 0 0;
	}

	img {
		object-fit: cover;
		object-position: center;
		position: relative;
		width: 100%;

		@media (min-width: 768px) and (max-width: 1279px) {
			height: 12rem;
		}

		@media (min-width: 1280px) {
			height: 10rem;
		}
	}
`;

export const CountryCardDescription = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: flex-start;
	padding: 1.75rem 1.5rem 3rem;
`;

export const CountryCardName = styled.h2`
	color: hsl(${({ theme }) => theme.colors.text});
	font-size: 1.25rem;
	font-weight: 800;
`;

export const CountryCardList = styled.ul`
	color: hsl(${({ theme }) => theme.colors.text});
	display: flex;
	font-weight: 300;
	flex-direction: column;
	font-size: 0.875rem;
	gap: 0.5rem;
	list-style: none;
	margin: 0;
	padding: 0;

	strong {
		font-weight: 600;
	}
`;
