import styled from 'styled-components';

export const Tools = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 1280px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
