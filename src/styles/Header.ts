import styled from 'styled-components';

export const HeaderComponent = styled.header`
	background-color: hsl(${({ theme }) => theme.colors.elements});
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.075);
	padding-block: 2rem;
	position: sticky;
	transition: var(--transition);
	top: 0;
	z-index: 10;

	@media (min-width: 1280px) {
		padding-block: 1rem;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 1.5rem;

	@media (min-width: 1280px) {
		margin-inline: auto;
		max-width: var(--container-desktop);
	}
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.text};
	font-size: 1rem;
	font-weight: 800;
	transition: var(--transition);
`;
