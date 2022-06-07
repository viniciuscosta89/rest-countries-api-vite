import styled from 'styled-components';

export const Container = styled.div`
	margin-inline: auto;
	max-width: var(--container-desktop);
	padding: 2rem 1.5rem;
	position: relative;

	@media (min-width: 1280px) {
		padding: 3rem 5rem;
	}
`;
