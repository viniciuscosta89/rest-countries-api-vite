import styled from 'styled-components';

export const SearchContainer = styled.div`
	background-color: hsl(${({ theme }) => theme.colors.elements});
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.075);
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-block-end: 2rem;
	padding: 1rem 2rem;
	position: relative;
	transition: var(--transition);

	@media (min-width: 1280px) {
		display: inline-flex;
		margin-block-end: 3rem;
		min-width: 32rem;
	}

	svg {
		fill: hsl(${({ theme }) => theme.colors.text} / 0.25);
		transition: var(--transition);
		width: 1.5rem;
	}

	input {
		background-color: transparent;
		border: none;
		border-width: 0 0 2px 0;
		border-color: transparent;
		border-style: solid;
		padding: 0;
		transition: var(--transition);
		width: 100%;

		&:focus {
			border-color: hsl(${({ theme }) => theme.colors.text});
			outline: none;
			outline-color: hsl(${({ theme }) => theme.colors.text});
		}

		&::placeholder {
			color: hsl(${({ theme }) => theme.colors.text} / 0.25);
			font-weight: 300;
			transition: var(--transition);
		}
	}
`;
