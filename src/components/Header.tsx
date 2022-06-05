import { FC } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { HeaderComponent, Container, Title } from '../styles/Header';
import Button from './Button';

const Header: FC = () => {
	const { toggleTheme } = useThemeContext();

	const handleClick = () => {
		toggleTheme();
	};

	return (
		<HeaderComponent>
			<Container>
				<Title>Where in the world?</Title>

				<Button onClick={handleClick}>
					<svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
						<title>Moon</title>
						<path
							d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>
					<span>Dark Mode</span>
				</Button>
			</Container>
		</HeaderComponent>
	);
};

export default Header;
