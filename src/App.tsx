import { GlobalStyles } from './styles/GlobalStyles';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Country from './pages/country/Country';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:country" element={<Country />} />
      </Routes>
    </>
  );
}

export default App
