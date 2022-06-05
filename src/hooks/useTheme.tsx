import { useState } from 'react';
import { lightTheme, darkTheme } from '../styles/DefaultTheme';
import { Theme } from '../types/themeTypes';

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme);

	const toggleTheme = () => {
		if (theme.name === 'light') {
			setTheme(darkTheme);
		} else {
			setTheme(lightTheme);
		}

		localStorage.setItem('theme', theme.name);
	};

	return { theme, toggleTheme };
};
