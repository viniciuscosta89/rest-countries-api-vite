import { createContext, FC, useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../types/themeTypes';

interface ThemeContextData {
	toggleTheme(): void;
	theme: Theme;
}

interface CustomThemeProps {
	children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider: FC<CustomThemeProps> = ({ children }) => {
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		localStorage.setItem('theme', theme.name);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
