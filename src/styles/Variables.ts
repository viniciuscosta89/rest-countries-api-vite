import { css } from 'styled-components';

const Variables = css`
	:root {
		// Font
		--font-main: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;

		// Font size
		--fs-xxs: 0.25rem;
		--fs-xs: 0.5rem;
		--fs-sm: 0.75rem;
		--fs-md: 1rem;
		--fs-lg: 1.25rem;
		--fs-xl: 1.5rem;
		--fs-xxl: 2rem;

		// Colors (HSL)
		--clr-dark-blue: 209 23% 22%;
		--clr-very-dark-blue-bg: 207 26% 17%;
		--clr-very-dark-blue-text: 200 15% 8%;
		--clr-dark-gray: 0 0% 52%;
		--clr-very-light-gray: 0 0% 98%;
		--clr-white: 0 0% 100%;

		// Containers
		--container-mobile: 375px;
		--container-desktop: 1440px;

		// Others
		--transition: all 0.3s ease-in-out;
	}
`;

export default Variables;
