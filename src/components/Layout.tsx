import Header from './Header';
import { GlobalStyles } from '../styles/GlobalStyles';
import { CustomThemeProvider } from '../hooks/ThemeContext';
import { CountryProvider } from '../hooks/CountryContext';

interface LayoutProps {
	children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<CustomThemeProvider>
			<CountryProvider>
				<GlobalStyles />
				<Header />
				<main>{children}</main>
			</CountryProvider>
		</CustomThemeProvider>
	);
}
