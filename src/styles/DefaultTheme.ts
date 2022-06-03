import { DefaultTheme } from 'styled-components';

export type ThemeType = typeof lightTheme;

export const lightTheme: DefaultTheme = {
	name: 'light',
	colors: {
		bg: 'var(--clr-very-light-gray)',
		text: 'var(--clr-very-dark-blue-text)',
		elements: 'var(--clr-white)',
	},
};

export const darkTheme: ThemeType = {
	name: 'dark',
	colors: {
		bg: 'var(--clr-very-dark-blue-bg)',
		text: 'var(--clr-white)',
		elements: 'var(--clr-dark-blue)',
	},
};

const myTheme = lightTheme;

export default myTheme;
