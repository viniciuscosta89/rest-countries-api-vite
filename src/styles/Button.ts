import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.button`
	background-color: hsl(${({ theme }) => theme.colors.elements});
	border: none;
	color: hsl(${({ theme }) => theme.colors.text});
	display: flex;
	align-items: center;
	font-size: 1rem;
	font-weight: 600;
	gap: 0.5rem;
	position: relative;
	transition: var(--transition);

	&:hover {
		color: hsl(${({ theme }) => theme.colors.text} / 0.5);
		cursor: pointer;
	}

	&:focus {
		color: hsl(${({ theme }) => theme.colors.text} / 0.5);
	}

	svg {
		width: 1.25rem;
	}

	> * {
		pointer-events: none;
	}
`;

export const BackButton = styled(Link)`
	background-color: hsl(${({ theme }) => theme.colors.elements});
	border-radius: 2px;
	box-shadow: 0 0rem 0.5rem rgba(0, 0, 0, 0.25);
	color: hsl(${({ theme }) => theme.colors.text});
	margin-block-end: 5rem;
	padding: 0.5rem 2rem;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	font-weight: 300;
	gap: 0.5rem;
	text-decoration: none;
	transition: var(--transition);

	&:hover {
		transform: translateX(-0.5rem);
	}

	&:focus {
		outline-color: hsl(${({ theme }) => theme.colors.text});
	}

	svg {
		width: 1.5rem;
	}

	> * {
		pointer-events: none;
	}
`
