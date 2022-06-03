import { createContext, FC, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/DefaultTheme';

interface ThemeContextData {
	toggleTheme(): void;
	theme: Theme;
}

interface Theme {
	name: string;
	colors: {
		bg: string;
		text: string;
		elements: string;
	};
}

interface CustomThemeProps {
	children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: FC<CustomThemeProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme);
	const [isDarkTheme, setDarkTheme] = useState<string>('false');

	const toggleTheme = () => {
		if (theme.name === 'light') {
			setTheme(darkTheme);
			setDarkTheme('true');
		} else {
			setTheme(lightTheme);
			setDarkTheme('false');
		}

		localStorage.setItem('theme', theme.name);
		localStorage.setItem('dark-mode', isDarkTheme);
	};

	useEffect(() => {
		localStorage.setItem('theme', theme.name);
		localStorage.setItem('dark-mode', isDarkTheme);
	}, [theme, isDarkTheme]);

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
