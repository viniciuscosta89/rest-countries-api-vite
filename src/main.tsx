import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from './context/ThemeContext';
import { CountryProvider } from './context/CountryContext';
import Header from './components/Header';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomThemeProvider>
			<CountryProvider>
				<HelmetProvider>
					<Header />
					<BrowserRouter>
						<main role="main">
							<App />
						</main>
					</BrowserRouter>
				</HelmetProvider>
			</CountryProvider>
		</CustomThemeProvider>
	</React.StrictMode>
);
