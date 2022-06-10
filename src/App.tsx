import { GlobalStyles } from './styles/GlobalStyles';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CountryPage from './pages/country';

function App() {
  return (
		<>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/country/:country" element={<CountryPage />} />
			</Routes>
		</>
	);
}

export default App
